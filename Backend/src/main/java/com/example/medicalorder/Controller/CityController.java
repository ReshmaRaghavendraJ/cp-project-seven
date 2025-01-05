package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.City;
import com.example.medicalorder.Repository.CityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class CityController
{
    @Autowired
    CityRepo cityRepo;

    /* Post City */
    @PostMapping("/addcity")
    public ResponseEntity<?> addcity(@RequestBody City obj)
    {
        cityRepo.save(obj);
        return new ResponseEntity<>("City added Successfully", HttpStatus.OK);
    }

    /* display all City details */
    @GetMapping("/getallcity")
    public ResponseEntity<?> getallcity()
    {
        List<City> citylist=cityRepo.findAll();
        return new ResponseEntity<>(citylist,HttpStatus.OK);
    }
}
