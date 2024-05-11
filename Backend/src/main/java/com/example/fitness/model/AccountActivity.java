package com.example.fitness.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class AccountActivity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "account_id", referencedColumnName = "id")
    private Account account;

    @ManyToOne
    @JoinColumn(name = "activity_id", referencedColumnName = "id") // Changed to activity_id
    private Activity activity; // Changed from Meal to Activity

    private LocalDate date;

    public AccountActivity(Long id, Account account, Activity activity, LocalDate date) {
        this.id = id;
        this.account = account;
        this.activity = activity;
        this.date = date;
    }

    public AccountActivity() {

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

    public Activity getActivity() { // Changed from getMeal() to getActivity()
        return activity;
    }

    public void setActivity(Activity activity) { // Changed from setMeal() to setActivity()
        this.activity = activity;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
