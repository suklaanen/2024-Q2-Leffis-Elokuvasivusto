package fi.oamk.leffis.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import fi.oamk.leffis.backend.controller.data.UserData;
import fi.oamk.leffis.backend.models.User;
import fi.oamk.leffis.backend.services.UserService;

@RestController
@CrossOrigin(origins = "http://localhost:5173", allowedHeaders = "*", allowCredentials = "true") 
//@RequestMapping("/")
public class UserController {

    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

    private final UserService userService;
    private final AuthenticationManager authManager;

    public UserController(UserService userService, AuthenticationManager authManager) {
        this.userService = userService;
        this.authManager = authManager;
    }
    
    @GetMapping("/users/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        return ResponseEntity.ok(userService.loadUserByUsername(username));
    }

    @PostMapping("/auth/register") 
    public ResponseEntity<User> registerUser(@RequestBody UserData userData) {
        //System.out.println(userData.getUsername());
        LOG.info("New user: {}" , userData.getUsername());
        User newUser = userService.register(userData.getUsername(), userData.getPassword());
        return ResponseEntity.ok(newUser);
    }

    @PostMapping("/auth/login") 
    public ResponseEntity<User> loginUser(@RequestBody UserData userData) {
        LOG.info("Login attempt: {}" , userData.getUsername());
        try {
            Authentication auth = authManager.authenticate(new UsernamePasswordAuthenticationToken(userData.getUsername(), userData.getPassword()));
            return ResponseEntity.ok((User)auth.getPrincipal());
        } catch (Exception e) {
            System.out.println(e);
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

    }


    //@DeleteMapping("/{id}") 
    
}
