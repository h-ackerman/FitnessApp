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
    private int totalCalories = 0;
    public AccountMeal saveAccountMeal(Long accountId, Long mealId) {
        Account account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        Meal meal = mealRepository.findById(mealId).orElseThrow(() -> new RuntimeException("Meal not found"));
        AccountMeal accountMeal = new AccountMeal();
        accountMeal.setAccount(account);
        accountMeal.setMeal(meal);
        accountMeal.setDate(LocalDate.now());
        totalCalories += meal.getCalories();
        return accountMealRepository.save(accountMeal);
    }
    public int getTotalCalories(Long accountId, LocalDate date) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        // Find all account meals associated with the account and date
        List<AccountMeal> accountMeals = accountMealRepository.findByAccountAndDate(account, date);

        // Reset total calories to zero at the start of each date
        int totalCalories = 0;

        // Calculate total calories by summing up the calories of each meal
        for (AccountMeal accountMeal : accountMeals) {
            totalCalories += accountMeal.getMeal().getCalories();
        }

        return totalCalories;
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



    public void deleteAccountMeal(Long accountId, Long mealId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));
        Meal meal = mealRepository.findById(mealId)
                .orElseThrow(() -> new RuntimeException("Meal not found"));

        AccountMeal accountMeal = accountMealRepository.findByAccountAndMeal(account, meal)
                .orElseThrow(() -> new RuntimeException("Account meal not found"));
        totalCalories -= meal.getCalories();
        accountMealRepository.delete(accountMeal);
    }
}



