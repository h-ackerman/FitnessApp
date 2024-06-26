package com.example.fitness.repository;


import com.example.fitness.model.Account;
import com.example.fitness.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByAccount(Account account);
}
