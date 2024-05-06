package com.example.fitness.controller;

import com.example.fitness.exception.ResourceNotFoundException;
import com.example.fitness.model.Account;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.security.CurrentUser;
import com.example.fitness.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {

    @Autowired
    private AccountRepository accountRepository;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
    // Api for getting logged user credentials
    public Account getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return accountRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("Account", "id", userPrincipal.getId()));
    }
}
