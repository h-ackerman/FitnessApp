package com.example.fitness.controller;

import com.example.fitness.model.Meal;
import com.example.fitness.service.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

@RestController
@CrossOrigin("http://localhost:3000/")
@RequestMapping("/meal")

public class MealController {
    @Autowired
    private  MealService mealService;
    public static String uploadDirectory = System.getProperty("user.dir") ;

    public MealController(MealService mealService) {
        this.mealService = mealService;
    }

    @GetMapping("/")
    public List<Meal> getAllMealService(){
        return mealService.findAll();
    }

    @GetMapping("/{id}")
    public Meal getMealById(@PathVariable Long id){
        return mealService.getMealById(id);
    }



    @PostMapping("/addMeal")
    public Meal saveMeal(@RequestBody Meal meal) {
        return mealService.saveMeal(meal);
    }







    @PutMapping("/{id}")
    public Meal updateMeal(@RequestBody Meal newMeal, @PathVariable Long id){
        return mealService.updateMeal(newMeal, id);
    }
    @DeleteMapping("/{id}")
    public void deleteMealById(@PathVariable Long id){
        mealService.deleteMealById(id);
    }

}
