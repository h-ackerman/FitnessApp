package com.example.fitness.controller;

import com.example.fitness.model.DailyStats;
import com.example.fitness.model.Meal;
import com.example.fitness.service.DailyStatsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/dailyStats")
public class DailyStatsController {

    @Autowired
    private DailyStatsService dailyStatsService;

    @GetMapping("/{accountId}")
    public List<DailyStats> getDailyStatsByAccountId(@PathVariable Long accountId) {
        return dailyStatsService.getDailyStatsByAccountId(accountId);
    }
}
