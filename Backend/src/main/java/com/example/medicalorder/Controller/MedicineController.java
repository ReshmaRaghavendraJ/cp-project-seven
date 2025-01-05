package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.Manufacturecompany;
import com.example.medicalorder.Entity.Medicine;
import com.example.medicalorder.Repository.DistributorRepo;
import com.example.medicalorder.Repository.ManufacturecompanyRepo;
import com.example.medicalorder.Repository.MedicineRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
public class MedicineController
{
    @Autowired
    MedicineRepo medicineRepo;

    @Autowired
    DistributorRepo distributorRepo;

    @Autowired
    ManufacturecompanyRepo manufacturecompanyRepo;

    /* Add Medicine details - Distributor Dashboard*/
    @PostMapping("/addmedicines/{manfucid}/{distributorid}")
    public ResponseEntity<?> addmedicines(@PathVariable Integer manfucid,@PathVariable Integer distributorid,@RequestBody Medicine obj)
    {
        var manuinfo=manufacturecompanyRepo.findById(manfucid).orElseThrow(()->new RuntimeException("Manufacture id not found"));
        var disinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributor id not found"));
        obj.setManufacturecompany1(manuinfo);
        obj.setDistributor10(disinfo);
        medicineRepo.save(obj);
        return new ResponseEntity<>("Medicine Added Successfully", HttpStatus.OK);
    }

    /* Get all Medicine list */
    @GetMapping("/getallmedicines")
    public ResponseEntity<?> getallmedicines()
    {
        List<Medicine> medicinelist=medicineRepo.findAll();
        return new ResponseEntity<>(medicinelist,HttpStatus.OK);
    }
}
