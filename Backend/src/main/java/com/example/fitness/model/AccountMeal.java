package com.example.fitness.model;

import jakarta.persistence.*;

import java.time.LocalDate;

@Entity
public class AccountMeal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "meal_id", referencedColumnName = "id")
    private Meal meal;

    private LocalDate date;

    public AccountMeal(Long id, Account account, Meal meal, LocalDate date) {
        this.id = id;
        this.account = account;
        this.meal = meal;
        this.date = date;
    }

    public AccountMeal() {

    }


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Account getAccount() {
        return account;
    }

    public void setAccount(Account account) {
        this.account = account;
    }

    public Meal getMeal() {
        return meal;
    }

    public void setMeal(Meal meal) {
        this.meal = meal;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
