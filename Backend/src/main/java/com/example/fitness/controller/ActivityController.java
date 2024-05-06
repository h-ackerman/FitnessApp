package com.example.fitness.controller;

import com.example.fitness.model.Activity;
import com.example.fitness.service.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {

    @Autowired
    private ActivityService activityService;

    @GetMapping("/")
    public List<Activity> getAllActivities() {
        return activityService.findAll();
    }

    @GetMapping("/{id}")
    public Activity getActivityById(@PathVariable Long id) {
        return activityService.getActivityById(id);
    }

    @PostMapping("/addActivity")
    public Activity saveActivity(@RequestBody Activity activity) {
        return activityService.saveActivity(activity);
    }

    @PutMapping("/{id}")
    public Activity updateActivity(@RequestBody Activity newActivity, @PathVariable Long id) {
        return activityService.updateActivity(newActivity, id);
    }

    @DeleteMapping("/{id}")
    public void deleteActivityById(@PathVariable Long id) {
        activityService.deleteActivityById(id);
    }
}
