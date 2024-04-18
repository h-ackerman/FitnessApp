package com.example.fitness.service;

import com.example.fitness.model.Activity;
import com.example.fitness.repository.ActivityRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {

    private final ActivityRepository activityRepository;

    public ActivityService(ActivityRepository activityRepository) {
        this.activityRepository = activityRepository;
    }

    public void deleteActivityById(Long id) {
        if (!activityRepository.existsById(id)) {
            throw new RuntimeException("Activity not found with id: " + id);
        } else {
            activityRepository.deleteById(id);
            System.out.println("Activity deleted with id: " + id);
        }
    }

    public Activity saveActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public List<Activity> findAll() {
        return activityRepository.findAll();
    }

    public Activity getActivityById(Long id) {
        return activityRepository.findById(id).orElseThrow(() -> new RuntimeException("Activity not found"));
    }

    public Activity updateActivity(Activity newActivity, Long id) {
        return activityRepository.findById(id)
                .map(activity -> {
                    activity.setNom(newActivity.getNom());
                    activity.setKcal(newActivity.getKcal());
                    activity.setDate(newActivity.getDate());
                    activity.setType(newActivity.getType());
                    activity.setDescription(newActivity.getDescription());

                    return activityRepository.save(activity);
                })
                .orElseGet(() -> {
                    newActivity.setId(id);
                    return activityRepository.save(newActivity);
                });
    }
}