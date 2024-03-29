package fi.oamk.leffis.backend.controller;

import org.springframework.http.ResponseEntity;
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
public class UserController {

    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }
    
    @GetMapping("/users/{username}")
    public ResponseEntity<User> getUser(@PathVariable("username") String username) {
        return ResponseEntity.ok(userService.loadUserByUsername(username));
    }

    @PostMapping("/user/register") 
    public ResponseEntity<User> registerUser(@RequestBody UserData userData) {
        User newUser = userService.register(userData.getUsername(), userData.getPassword());
        return ResponseEntity.ok(newUser);
    }

    //@DeleteMapping("/{id}") 
    
}
