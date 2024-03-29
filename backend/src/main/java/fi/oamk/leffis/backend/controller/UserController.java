package fi.oamk.leffis.backend.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
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
@CrossOrigin(origins = "http://localhost:5173") 
//@RequestMapping("/")
public class UserController {

    private static final Logger LOG = LoggerFactory.getLogger(UserController.class);

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
        //System.out.println(userData.getUsername());
        LOG.info("New user: {}" , userData.getUsername());
        User newUser = userService.register(userData.getUsername(), userData.getPassword());
        return ResponseEntity.ok(newUser);
    }

    //@DeleteMapping("/{id}") 
    
}
