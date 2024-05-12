package com.example.fitness.controller;

import com.example.fitness.model.AccountMeal;
import com.example.fitness.model.Meal;
import com.example.fitness.service.AccountMealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/myMeals")
public class AccountMealController {

    @Autowired
    private AccountMealService accountMealService;


    @GetMapping("/account/{accountId}/meal/{mealId}/add")
    public AccountMeal addAccountMeal(@PathVariable Long accountId, @PathVariable Long mealId) {
        try {
            return accountMealService.saveAccountMeal(accountId, mealId);
        } catch (Exception e) {
            throw new RuntimeException("Failed to add account meal", e);
        }
    }

    @GetMapping("/user/{userId}/meals")
    public List<Meal> getMealsByUserId(@PathVariable Long userId) {
        return accountMealService.getMealsByAccountId(userId);
    }
    @GetMapping("/account/{accountId}/totalCalories")
    public int getTotalCalories(@PathVariable Long accountId) {
        return accountMealService.getTotalCalories(accountId, LocalDate.now());
    }
    @DeleteMapping("/account/{accountId}/meal/{mealId}/delete")
    public void deleteAccountMeal(@PathVariable Long accountId, @PathVariable Long mealId) {
        accountMealService.deleteAccountMeal(accountId, mealId);
    }

}
