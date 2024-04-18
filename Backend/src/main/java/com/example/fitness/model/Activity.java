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

     private String nom;

     private Integer kcal;

     private LocalDate date;

     private String type;

     private String description;



      public Long getId() {
           return id;
      }

      public void setId(Long id) {
           this.id = id;
      }

      public String getNom() {
           return nom;
      }

      public void setNom(String nom) {
           this.nom = nom;
      }

      public Integer getKcal() {
           return kcal;
      }

      public void setKcal(Integer kcal) {
           this.kcal = kcal;
      }

      public LocalDate getDate() {
           return date;
      }

      public void setDate(LocalDate date) {
           this.date = date;
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
