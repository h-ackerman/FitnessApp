package com.example.fitness.service;

import com.example.fitness.model.Account;
import com.example.fitness.model.DailyStats;
import com.example.fitness.repository.AccountRepository;
import com.example.fitness.repository.DailyStatsRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DailyStatsService {
    private final DailyStatsRepository dailyStatsRepository;
    private final AccountRepository accountRepository;

    public DailyStatsService(DailyStatsRepository dailyStatsRepository, AccountRepository accountRepository) {
        this.dailyStatsRepository = dailyStatsRepository;
        this.accountRepository = accountRepository;
    }


    public List<DailyStats> getDailyStatsByAccountId(Long accountId) {
        Account account = accountRepository.findById(accountId)
                .orElseThrow(() -> new RuntimeException("Account not found"));

        List<DailyStats> dailyStats = dailyStatsRepository.findByAccount(account);

        return dailyStats;
    }
}
