package com.example.fitness.controller;

import com.example.fitness.dto.ActivityWithDateDTO;
import com.example.fitness.model.AccountActivity;
import com.example.fitness.model.Activity;
import com.example.fitness.service.AccountActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/myActivities")
public class AccountActivityController {

    @Autowired
    private AccountActivityService accountActivityService;


    @GetMapping("/account/{accountId}/activity/{activityId}/add")
    public AccountActivity addAccountActivity(@PathVariable Long accountId, @PathVariable Long activityId) {
        try {
            return accountActivityService.saveAccountActivity(accountId, activityId);
        } catch (Exception e) {
            throw new RuntimeException("Failed to add account activity", e);
        }
    }

    @GetMapping("/account/{accountId}/activity/{activityId}/date/{date}/add")
    public AccountActivity addAccountActivity(@PathVariable Long accountId, @PathVariable Long activityId, @PathVariable String date) {
        try {
            LocalDate parsedDate = LocalDate.parse(date);
            return accountActivityService.saveAccountActivity(accountId, activityId, parsedDate);
        } catch (Exception e) {
            throw new RuntimeException("Failed to add account activity", e);
        }
    }


    @GetMapping("/user/{userId}/activities")
    public List<ActivityWithDateDTO> getActivitiesByAccountId(@PathVariable Long userId) {
        return accountActivityService.getActivitiesByAccountId(userId);
    }
}

