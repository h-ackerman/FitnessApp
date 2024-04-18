package com.example.fitness.service;

import com.example.fitness.model.Meal;
import com.example.fitness.repository.MealRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MealService {

    private final MealRepository mealRepository;
    public MealService(MealRepository mealRepository) {
        this.mealRepository = mealRepository;
    }
    public void deleteMealById(Long id) {
        if(!mealRepository.existsById(id)){
            throw new RuntimeException("Meal not found with id: " + id);
        }
        else
        {mealRepository.deleteById(id);
            System.out.println("Meal deleted with id: " + id);}
    }


    public Meal saveMeal(Meal meal) {
        return mealRepository.save(meal);
    }


    public List<Meal> findAll() {
        return mealRepository.findAll();
    }
    public Meal getMealById(Long id) {
        return mealRepository.findById(id).orElseThrow(()-> new RuntimeException("Meal not found"));
    }

    public Meal updateMeal(Meal newMeal, Long id) {
        return mealRepository.findById(id)
                .map(meal -> {
                    meal.setName(newMeal.getName());
                    meal.setDescription(newMeal.getDescription());
                    meal.setType(newMeal.getType());
                    meal.setCalories(newMeal.getCalories());
                    meal.setProtein(newMeal.getProtein());
                    meal.setCarbs(newMeal.getCarbs());
                    meal.setFats(newMeal.getFats());
                    meal.setImage(newMeal.getImage());

                    return mealRepository.save(meal);

                })
                .orElseGet(() -> {
                    newMeal.setId(id);
                    return mealRepository.save(newMeal);
                });
    }

}
