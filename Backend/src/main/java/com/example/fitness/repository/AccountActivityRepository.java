package com.example.fitness.repository;


import com.example.fitness.model.Account;
import com.example.fitness.model.AccountActivity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountActivityRepository  extends JpaRepository<AccountActivity, Long> {
    List<AccountActivity> findByAccount(Account account);
}