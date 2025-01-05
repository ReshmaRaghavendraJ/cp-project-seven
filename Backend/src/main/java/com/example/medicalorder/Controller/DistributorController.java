package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.Distributor;
import com.example.medicalorder.Repository.CityRepo;
import com.example.medicalorder.Repository.DistributorRepo;
import com.example.medicalorder.Repository.SupplyOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class DistributorController
{
    @Autowired
    DistributorRepo distributorRepo;

    @Autowired
    CityRepo cityRepo;

    @Autowired
    SupplyOrderRepo supplyOrderRepo;

    /* Distributor login check */
    @GetMapping("/dislogincheck/{emailid}/{password}")
    public ResponseEntity<?> dislogincheck(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Distributor by email ID
            Distributor disinfo = distributorRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!disinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Distributor Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Distributor info if login is successful
                return new ResponseEntity<>(disinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }


    /* Add distributor Details */
    @PostMapping("/adddistributordetails/{cityid}")
    public ResponseEntity<?> adddistributordetails(@PathVariable Integer cityid,@RequestBody Distributor obj)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("Cityid not found"));
        obj.setCity2(cityinfo);
        distributorRepo.save(obj);
        return new ResponseEntity<>("Distributor added Successfully",HttpStatus.OK);
    }


    /* display distributor list based on City */
    @GetMapping("/getdistributoroncity/{cityid}")
    public ResponseEntity<?> getdistributoroncity(@PathVariable Integer cityid)
    {
        var citinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
        List<Distributor>dislist=citinfo.getDistributor1();
        if(dislist.isEmpty())
        {
            return new ResponseEntity<>("No Distributors found for the cityid",HttpStatus.NOT_FOUND);
        }
            return new ResponseEntity<>(dislist,HttpStatus.OK);
    }

    //Getalldistributors
    @GetMapping("/getalldistributors")
    public ResponseEntity<?> getalldistributors()
    {
        List<Distributor>dislist=distributorRepo.findAll();
        return new ResponseEntity<>(dislist,HttpStatus.OK);
    }


    /* Update Distributors Profile details */
    @PutMapping("/updatedisprofile/{distributorid}")
    public ResponseEntity<?> updatedisprofile(@PathVariable Integer distributorid,@RequestBody Distributor obj)
    {
        var disinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributor id not found"));
        disinfo.setAddress(obj.getAddress());
        disinfo.setEmailid(obj.getEmailid());
        disinfo.setImage(obj.getImage());
        disinfo.setName(obj.getName());
        disinfo.setMobile(obj.getMobile());
        distributorRepo.save(disinfo);
        return new ResponseEntity<>("Distributors Profile Updated Successfully",HttpStatus.OK);
    }

    /* Get particular Distributors Details - Update Distributors Profile*/
    @GetMapping("/getdistributors/{distributorid}")
    public ResponseEntity<?> getdistributors(@PathVariable Integer distributorid)
    {
        var disinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributors id not found"));
        return new ResponseEntity<>(disinfo,HttpStatus.OK);
    }

    /* Update Distributors Password */
    @PutMapping("/updatedistripswd/{distributorid}")
    public ResponseEntity<?> updatedistripswd(@PathVariable Integer distributorid,@RequestBody Distributor obj)
    {
        var disinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributor id not found"));
        disinfo.setPassword(obj.getPassword());
        distributorRepo.save(disinfo);
        return new ResponseEntity<>("Distributors Password Updated Successfully",HttpStatus.OK);
    }

    /* Update Supplyorder status - Checkdisorderlist */
    @PutMapping("/updatesupplyorderstatus/{supplyorderid}")
    public ResponseEntity<?> updatesupplyorderstatus(@PathVariable Integer supplyorderid)
    {
        var supinfo=supplyOrderRepo.findById(supplyorderid).orElseThrow(()->new RuntimeException("Supply order id not found"));
        supinfo.setStatus("Approved");
        supplyOrderRepo.save(supinfo);
        return new ResponseEntity<>("Distributors Approved Medicine to Supplyorders",HttpStatus.OK);
    }

    /* Update status of supplyorder to "supplied" - Checkdisorderlist */
    @PutMapping("/updatesupliedstatus/{supplyorderid}")
    public ResponseEntity<?> updatesupliedstatus(@PathVariable Integer supplyorderid)
    {
        var suppinfo=supplyOrderRepo.findById(supplyorderid).orElseThrow(()->new RuntimeException("Supplyorderid not found"));
        suppinfo.setStatus("Supplied");
        supplyOrderRepo.save(suppinfo);
        return new ResponseEntity<>("Medicine Supplied Successfully",HttpStatus.OK);
    }

    /* Display all distributor details  - Viewdistributor  (NOT Necessary) */
//    @GetMapping("/getalldistributors")
//    public ResponseEntity<?> getalldistributors()
//    {
//        List<Distributor> dislist = distributorRepo.findAll();
//        if (dislist.isEmpty())
//        {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        List<DistributorDTO> dis = dislist.stream().map(item ->
//        {
//            DistributorDTO dto = new DistributorDTO();
//            dto.setDistributorid(item.getDistributorid());
//            dto.setName(item.getName());
//            dto.setMobile(item.getMobile());
//            dto.setEmailid(item.getEmailid());
//            dto.setImage(item.getImage());
//            dto.setPassword(item.getPassword());
//            dto.setAddress(item.getAddress());
//            dto.setCity(item.getCity2().getCity());
//            return dto;
//        }).collect(Collectors.toList());
//        return new ResponseEntity<>(dis,HttpStatus.OK);
//    }
}
