package com.example.fitness.service;

import com.example.fitness.model.Account;
import com.example.fitness.repository.AccountRepository;
import org.springframework.stereotype.Service;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public Account getAccountById(Long id) {
        return accountRepository.findById(id).orElseThrow(()-> new RuntimeException("Account not found"));
    }
}
