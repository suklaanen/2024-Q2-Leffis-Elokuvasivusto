package fi.oamk.leffis.backend.services;

import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import fi.oamk.leffis.backend.models.User;
import fi.oamk.leffis.backend.models.UserRole;
import fi.oamk.leffis.backend.repositories.UserRepository;

@Service
public class UserService implements UserDetailsService{

    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }
    
    @Override
    public User loadUserByUsername(String username) throws UsernameNotFoundException {

        return userRepository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(username + " not found"));
    }

    public User register(String username, String password) {
        if (username == null || username.isBlank() || password == null || password.isBlank()) {
            throw new IllegalArgumentException("Username or password is empty");
        }
        return userRepository.save(new User(username, passwordEncoder.encode(password), UserRole.ROLE_USER.name()));
    }

    public User loadUserById(Long userid) throws UsernameNotFoundException {
        return userRepository.findById(1L)
                .orElseThrow(() -> new UsernameNotFoundException(userid + " not found"));
    }

    public void delete(Long userid) {
        userRepository.deleteById(userid);
    }


}

