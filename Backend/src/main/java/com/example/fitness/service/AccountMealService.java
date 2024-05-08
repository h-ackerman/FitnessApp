package com.example.fitness.service;

import com.example.fitness.model.Account;
import com.example.fitness.model.AccountMeal;
import com.example.fitness.model.Meal;
import com.example.fitness.repository.AccountMealRepository;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.repository.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountMealService {

    @Autowired
    private AccountMealRepository accountMealRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private MealRepository mealRepository;

    public AccountMeal saveAccountMeal(Long accountId, Long mealId) {
        Account account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        Meal meal = mealRepository.findById(mealId).orElseThrow(() -> new RuntimeException("Meal not found"));
        AccountMeal accountMeal = new AccountMeal();
        accountMeal.setAccount(account);
        accountMeal.setMeal(meal);
        accountMeal.setDate(LocalDate.now());
        return accountMealRepository.save(accountMeal);
    }

    public List<Meal> getMealsByAccountId(Long accountId) {
        // Find the account by accountId
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        // Find all account meals associated with the account
        List<AccountMeal> accountMeals = accountMealRepository.findByAccount(account);

        // Extract the meals from the account meals
        List<Meal> meals = new ArrayList<>();
        for (AccountMeal accountMeal : accountMeals) {
            meals.add(accountMeal.getMeal());
        }

        return meals;
    }
}
