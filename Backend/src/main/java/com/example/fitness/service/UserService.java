package com.example.fitness.service;

import com.example.fitness.model.Account;
import com.example.fitness.model.User;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final AccountRepository accountRepository;

    public UserService(UserRepository userRepository, AccountRepository accountRepository) {
        this.userRepository = userRepository;
        this.accountRepository = accountRepository;
    }
    /**/
    public User getUserById(Long id) {
        return userRepository.findById(id).orElseThrow(()-> new RuntimeException("User not found"));
    }


    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }


    public User saveUser(User user, Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));


        user.setAccount(account);

        return userRepository.save(user);
    }

    public List<User> findAll() {
        return userRepository.findAll();
    }

}
