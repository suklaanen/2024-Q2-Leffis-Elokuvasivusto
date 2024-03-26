package fi.oamk.muuvi.backend.models;

import java.util.Collection;
import java.util.Collections;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


@Entity
@Table(name = "users")
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long userId;

    private String username;
    private String passwordHash;
    private String userRole;

    public User(String username, String passwordHash, String userRole) {
        this.username = username;
        this.passwordHash = passwordHash;
        this.userRole = userRole;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return Collections.singletonList(UserRole.valueOf(userRole));
    }

    @Override
    public String getPassword() {
        return passwordHash;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        // ei tueta tällaista ominaisuutta
        return false;
    }

    @Override
    public boolean isAccountNonLocked() {
        // tämä toteutetaan myöhemmin
        return false;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        // ei tueta tällaista ominaisuutta
        return false;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
    
}
