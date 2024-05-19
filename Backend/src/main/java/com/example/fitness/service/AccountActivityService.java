package com.example.fitness.service;

import com.example.fitness.model.Account;
import com.example.fitness.model.AccountActivity;
import com.example.fitness.model.Activity;
import com.example.fitness.repository.AccountActivityRepository;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.repository.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Service
public class AccountActivityService {

    @Autowired
    private AccountActivityRepository accountActivityRepository;

    @Autowired
    private AccountRepository accountRepository;

    @Autowired
    private ActivityRepository activityRepository;

    public AccountActivity saveAccountActivity(Long accountId, Long activityId) {
        Account account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        Activity activity = activityRepository.findById(activityId).orElseThrow(() -> new RuntimeException("Activity not found"));
        AccountActivity accountActivity = new AccountActivity();
        accountActivity.setAccount(account);
        accountActivity.setActivity(activity);
        accountActivity.setDate(LocalDate.now());
        return accountActivityRepository.save(accountActivity);
    }
    public AccountActivity saveAccountActivity(Long accountId, Activity activityId,LocalDate date) {
        Account account = accountRepository.findById(accountId).orElseThrow(() -> new RuntimeException("Account not found"));
        Activity activity = activityRepository.findById(activityId.getId()).orElseThrow(() -> new RuntimeException("Activity not found"));
        AccountActivity accountActivity = new AccountActivity();
        accountActivity.setId(accountId);
        accountActivity.setActivity(activityId);
        accountActivity.setDate(date);
        return accountActivityRepository.save(accountActivity);
    }



    public List<Activity> getActivitiesByAccountId(Long accountId) {
        // Find the account by accountId
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        // Find all account activities associated with the account
        List<AccountActivity> accountActivities = accountActivityRepository.findByAccount(account);

        // Extract the activities from the account meals
        List<Activity> activities = new ArrayList<>();
        for (AccountActivity accountActivity : accountActivities) {
            activities.add(accountActivity.getActivity());
        }

        return activities;
    }
}

