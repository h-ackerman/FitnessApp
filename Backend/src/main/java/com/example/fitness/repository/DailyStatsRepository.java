package com.example.fitness.repository;

import com.example.fitness.model.Account;
import com.example.fitness.model.DailyStats;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DailyStatsRepository extends JpaRepository<DailyStats, Long> {
    List<DailyStats> findByAccount(Account account);
}
