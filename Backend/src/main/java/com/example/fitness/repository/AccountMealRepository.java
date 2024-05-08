package com.example.fitness.repository;

import com.example.fitness.model.Account;
import com.example.fitness.model.AccountMeal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AccountMealRepository extends JpaRepository<AccountMeal, Long> {
    List<AccountMeal> findByAccount(Account account);
}
