package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.Manufacturecompany;
import com.example.medicalorder.Repository.CityRepo;
import com.example.medicalorder.Repository.ManufacturecompanyRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
public class ManufacturecompanyController
{
    @Autowired
    ManufacturecompanyRepo manufacturecompanyRepo;

    @Autowired
    CityRepo cityRepo;

    /* add manufacture company details based on city */
    @PostMapping("/addmanyfacturecompany/{cityid}")
    public ResponseEntity<?> addmanyfacturecompany(@PathVariable Integer cityid, @RequestBody Manufacturecompany obj)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
       obj.setCity1(cityinfo);
        manufacturecompanyRepo.save(obj);
        return new ResponseEntity<>("Manufacture company added successfully", HttpStatus.OK);
    }

    /* Display all Medicine manufacturing company details */
    @GetMapping("/getmedicinecompany")
    public ResponseEntity<?> getmedicinecompany()
    {
        List<Manufacturecompany> manuflist=manufacturecompanyRepo.findAll();
        return new ResponseEntity<>(manuflist,HttpStatus.OK);
    }
}
