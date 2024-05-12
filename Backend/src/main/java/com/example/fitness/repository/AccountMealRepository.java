package com.example.fitness.repository;

import com.example.fitness.model.Account;
import com.example.fitness.model.AccountMeal;
import com.example.fitness.model.Meal;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

public interface AccountMealRepository extends JpaRepository<AccountMeal, Long> {
    List<AccountMeal> findByAccount(Account account);
    Optional<AccountMeal> findByAccountAndMeal(Account account, Meal meal);
    List<AccountMeal> findByAccountAndDate(Account account, LocalDate date);


}
