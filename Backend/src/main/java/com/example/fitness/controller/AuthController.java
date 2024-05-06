package com.example.fitness.controller;

import com.example.fitness.exception.BadRequestException;
import com.example.fitness.model.Account;
import com.example.fitness.model.AuthProvider;
import com.example.fitness.payload.ApiResponse;
import com.example.fitness.payload.AuthResponse;
import com.example.fitness.payload.LoginRequest;
import com.example.fitness.payload.SignUpRequest;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.security.TokenProvider;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;


import java.net.URI;

@RestController
@RequestMapping("/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Autowired
    private TokenProvider tokenProvider;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getEmail(),
                        loginRequest.getPassword()
                )
        );

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = tokenProvider.createToken(authentication);
        return ResponseEntity.ok(new AuthResponse(token));
    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@Valid @RequestBody SignUpRequest signUpRequest) {
        if(accountRepository.existsByEmail(signUpRequest.getEmail())) {
            throw new BadRequestException("Email address already in use.");
        }

        // Creating account's account
        Account account = new Account();
        account.setName(signUpRequest.getName());
        account.setEmail(signUpRequest.getEmail());
        account.setPassword(signUpRequest.getPassword());
        account.setProvider(AuthProvider.local);

        account.setPassword(passwordEncoder.encode(account.getPassword()));

        Account result = accountRepository.save(account);

        URI location = ServletUriComponentsBuilder
                .fromCurrentContextPath().path("/account/me")
                .buildAndExpand(result.getId()).toUri();

        return ResponseEntity.created(location)
                .body(new ApiResponse(true, "Account registered successfully@"));
    }

}
