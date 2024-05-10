package com.example.fitness.controller;

import com.example.fitness.model.User;
import com.example.fitness.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("/")
    public List<User> getAllUsers() {
        return userService.findAll();
    }

    @PostMapping("/register/{accountId}")
    public ResponseEntity<String> registerUser(@RequestBody User user, @PathVariable Long accountId) {
        try {
            userService.saveUser(user, accountId);
            return ResponseEntity.ok("User registered successfully");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to register user");
        }
    }
}
