package com.example.fitness.dto;

import com.example.fitness.model.Activity;

import java.time.LocalDate;

public class ActivityWithDateDTO {
    private Activity activity;
    private LocalDate date;

    // Constructor
    public ActivityWithDateDTO(Activity activity, LocalDate date) {
        this.activity = activity;
        this.date = date;
    }

    // Getters and Setters
    public Activity getActivity() {
        return activity;
    }

    public void setActivity(Activity activity) {
        this.activity = activity;
    }

    public LocalDate getDate() {
        return date;
    }

    public void setDate(LocalDate date) {
        this.date = date;
    }
}
