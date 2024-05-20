package com.example.fitness.service;

import com.example.fitness.model.Account;
import com.example.fitness.model.User;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.repository.UserRepository;
import jakarta.transaction.Transactional;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

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

    @Transactional
    public User updateUser(User user, Long accountId) {
        // Fetch the existing user by the account ID
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        User existingUser = userRepository.findByAccount(account)
                .orElseThrow(() -> new RuntimeException("User not found for the account"));

        // Update the user’s properties
        existingUser.setSex(user.getSex());
        existingUser.setAge(user.getAge());
        existingUser.setHeight(user.getHeight());
        existingUser.setWeight(user.getWeight());
        existingUser.setGoal(user.getGoal());

        // Save the updated user entity
        return userRepository.save(existingUser);
    }
}
