package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.Supplier;
import com.example.medicalorder.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
public class SupplierController
{
    @Autowired
    SupplierRepo supplierRepo;

    @Autowired
    CityRepo cityRepo;

    @Autowired
    DistributorRepo distributorRepo;

    @Autowired
    ShopOrderRepo shopOrderRepo;

    @Autowired
    ShopRepo shopRepo;

    /* Supplier login check */
    @GetMapping("/supplierlogincheck/{emailid}/{password}")
    public ResponseEntity<?> supplierlogincheck(@PathVariable String emailid, @PathVariable String password) {
        try {
            // Find the Supplier by email ID
            Supplier supplierinfo = supplierRepo.findByEmailid(emailid).orElseThrow(() -> new RuntimeException("Email ID not found"));

            // Check if the password matches
            if (!supplierinfo.getPassword().equals(password)) {
                return new ResponseEntity<>("Supplier Password is incorrect", HttpStatus.UNAUTHORIZED);
            } else {
                // Return Supplier info if login is successful
                return new ResponseEntity<>(supplierinfo, HttpStatus.OK);
            }
        } catch (RuntimeException e) {
            // Handle errors gracefully
            Map<String, Object> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
        }
    }


    /* Add Supplier Details */
    @PostMapping("/addsupplierdetails/{cityid}/{distributorid}")
    public ResponseEntity<?> addsupplierdetails(@PathVariable Integer cityid,@PathVariable Integer distributorid,@RequestBody Supplier obj)
    {
        var cityinfo=cityRepo.findById(cityid).orElseThrow(()->new RuntimeException("City id not found"));
        var distributorinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributor id not found"));
        obj.setCity3(cityinfo);
        obj.setDistributor11(distributorinfo);
        supplierRepo.save(obj);
        return new ResponseEntity<>("Supplier details added Successfully",HttpStatus.OK);
    }

    /* Display all Suppliers details */
    @GetMapping("/getallsuppliers")
    public ResponseEntity<?> getallsuppliers()
    {
        List<Supplier> supplierList=supplierRepo.findAll();
        return new ResponseEntity<>(supplierList,HttpStatus.OK);
    }

    /* Update Supplier Profiles */
    @PutMapping("/Updatesupprofile/{supplierid}")
    public ResponseEntity<?> Updatesupprofile(@PathVariable Integer supplierid,@RequestBody Supplier obj)
    {
        var supinfo=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplier id not found"));
        supinfo.setAddress(obj.getAddress());
        supinfo.setEmailid(obj.getEmailid());
        supinfo.setImage(obj.getImage());
        supinfo.setName(obj.getName());
        supinfo.setMobile(obj.getMobile());
        supplierRepo.save(supinfo);
        return new ResponseEntity<>("Supplier Profile Updated Successfully",HttpStatus.OK);
    }

    /* Get particular Supplier Profile details */
    @GetMapping("/getsupplierdetails/{supplierid}")
    public ResponseEntity<?> getsupplierdetails(@PathVariable Integer supplierid)
    {
        var suppinfo=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplier id not found"));
        return new ResponseEntity<>(suppinfo,HttpStatus.OK);
    }

    /* Update Supplier Password */
    @PutMapping("/updatesuppswd/{supplierid}")
    public ResponseEntity<?> updatesuppswd(@PathVariable Integer supplierid,@RequestBody Supplier obj)
    {
        var suppinfo=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplier id not found"));
        suppinfo.setPassword(obj.getPassword());
        supplierRepo.save(suppinfo);
        return new ResponseEntity<>("Supplier Password Updated Successfully",HttpStatus.OK);
    }

    /* Update status after book medicine from shoporder to supplier - Checksuporderlist */
    @PutMapping("/updateshoporderstatus/{shoporderid}")
    public ResponseEntity<?> updateshoporderstatus(@PathVariable Integer shoporderid)
    {
        var shpordrid=shopOrderRepo.findById(shoporderid).orElseThrow(()->new RuntimeException("Shoporderid not found"));
        shpordrid.setStatus("Approved");
        shopOrderRepo.save(shpordrid);
        return new ResponseEntity<>("Supplier Approved Medicine to Shoporders",HttpStatus.OK);
    }

    /* Update status of shoporder to "supplied" - Checksuporderlist */
    @PutMapping("/updatesupplied/{shoporderid}")
    public ResponseEntity<?> updatesupplied(@PathVariable Integer shoporderid)
    {
        var shpordrinfo=shopOrderRepo.findById(shoporderid).orElseThrow(()->new RuntimeException("Shoporderid not found"));
        shpordrinfo.setStatus("Supplied");
        shopOrderRepo.save(shpordrinfo);
        return new ResponseEntity<>("Medicine Supplied Successfully",HttpStatus.OK);
    }

    /* Display all supplier details  - viewsupplier  (NOT Necessary) */
//    @GetMapping("/getallsuppliers")
//    public ResponseEntity<?> getallsuppliers()
//    {
//        List<Supplier> suplist = supplierRepo.findAll();
//        if (suplist.isEmpty())
//        {
//            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//        }
//        List<SupplierDTO> sup = suplist.stream().map(item ->
//        {
//            SupplierDTO dto = new SupplierDTO();
//            dto.setSupplierid(item.getSupplierid());
//            dto.setEmailid(item.getEmailid());
//            dto.setImage(item.getImage());
//            dto.setAddress(item.getAddress());
//            dto.setMobile(item.getMobile());
//            dto.setName(item.getName());
//            dto.setCityid(item.getCity3().getCity());
//            dto.setDistributorid(item.getDistributor11().getName());
//            return dto;
//        }).collect(Collectors.toList());
//        return new ResponseEntity<>(sup,HttpStatus.OK);
//    }
}
