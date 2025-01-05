package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.Admin;
import com.example.medicalorder.Entity.Shop;
import com.example.medicalorder.Repository.CityRepo;
import com.example.medicalorder.Repository.DistributorRepo;
import com.example.medicalorder.Repository.ShopRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class ShopController
{
    @Autowired
    ShopRepo shopRepo;

    @Autowired
    CityRepo cityRepo;

    @Autowired
    DistributorRepo distributorRepo;

    /* Medical Shop Login check */
    @GetMapping("/shoplogincheck/{emailid}/{password}")
    public ResponseEntity<?> shoplogincheck(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Shop by email ID
            Shop shopinfo = shopRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!shopinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Shop Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Shop info if login is successful
                return new ResponseEntity<>(shopinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }


    /* add Shop details-Shop Registration */
    @PostMapping("/shopregister/{cityid}")
    public ResponseEntity<?> shopregister(@PathVariable Integer cityid,@RequestBody Shop obj)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
        obj.setCity4(cityinfo);
        shopRepo.save(obj);
        return new ResponseEntity<>("Shop Registered Successfully",HttpStatus.OK);
    }

    /* Display all Shop details */
    @GetMapping("/getallshops")
    public ResponseEntity<?> getallshops()
    {
        List<Shop> shoplist=shopRepo.findAll();
        return new ResponseEntity<>(shoplist,HttpStatus.OK);
    }

    /* Update Shop Profile */
    @PutMapping("/updateshopprofile/{shopid}")
    public ResponseEntity<?> updateshopprofile(@PathVariable Integer shopid,@RequestBody Shop obj)
    {
        var shopinfo=shopRepo.findById(shopid).orElseThrow(()->new RuntimeException("Shop id not found"));
     shopinfo.setAddress(obj.getAddress());
     shopinfo.setEmailid(obj.getEmailid());
     shopinfo.setMobileno(obj.getMobileno());
     shopinfo.setLocation(obj.getLocation());
     shopinfo.setImage(obj.getImage());
     shopinfo.setName(obj.getName());
     shopRepo.save(shopinfo);
     return new ResponseEntity<>("Shop details Updated Successfully",HttpStatus.OK);
    }

    /* Get Particular Shop details - Update Shop Profile*/
    @GetMapping("/getshopdetails/{shopid}")
    public ResponseEntity<?> getshopdetails(@PathVariable Integer shopid)
    {
        var shopeinfo=shopRepo.findById(shopid).orElseThrow(()->new RuntimeException("Shop id not found"));
        return new ResponseEntity<>(shopeinfo,HttpStatus.OK);
    }

    /* Update Shop Password */
    @PutMapping("/updateshoppswd/{shopid}")
    public ResponseEntity<?> updateshoppswd(@PathVariable Integer shopid,@RequestBody Shop obj)
    {
        var shinfo=shopRepo.findById(shopid).orElseThrow(()->new RuntimeException("Shop id not found"));
        shinfo.setPassword(obj.getPassword());
        shopRepo.save(shinfo);
        return new ResponseEntity<>("Shop Password Updated Successfully",HttpStatus.OK);
    }
}
