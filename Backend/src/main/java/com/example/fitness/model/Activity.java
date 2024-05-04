package com.example.fitness.model;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.time.LocalDate;

@Entity
public class Activity {

     @Id
     @GeneratedValue(strategy = GenerationType.IDENTITY)
     private Long id;
     private String name;
    private Integer calories;
    private Integer duration;
    private String image;
    private String type;

    private String description;

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }



    public Integer getDuration() {
        return duration;
    }

    public void setDuration(Integer duration) {
        this.duration = duration;
    }

    public Long getId() {
           return id;
      }

      public void setId(Long id) {
           this.id = id;
      }




      public String getType() {
           return type;
      }

      public void setType(String type) {
           this.type = type;
      }

      public String getDescription() {
           return description;
      }

      public void setDescription(String description) {
           this.description = description;
      }


 }
