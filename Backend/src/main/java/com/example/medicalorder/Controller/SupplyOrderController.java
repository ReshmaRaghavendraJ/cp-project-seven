package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.Supplier;
import com.example.medicalorder.Entity.SupplyOrder;
import com.example.medicalorder.Repository.DistributorRepo;
import com.example.medicalorder.Repository.MedicineRepo;
import com.example.medicalorder.Repository.SupplierRepo;
import com.example.medicalorder.Repository.SupplyOrderRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
public class SupplyOrderController
{
    @Autowired
    MedicineRepo medicineRepo;

    @Autowired
    SupplierRepo supplierRepo;

    @Autowired
    DistributorRepo distributorRepo;

    @Autowired
    SupplyOrderRepo supplyOrderRepo;

    /* Add Supplyorder details - Supplier Dashboard ( Booksupmedicines ) */
    @PostMapping("/booksupordermedicine/{medicineid}/{distributorid}/{supplierid}")
    public ResponseEntity<?> booksupordermedicine(@PathVariable Integer medicineid, @PathVariable Integer distributorid,@PathVariable Integer supplierid, @RequestBody SupplyOrder obj)
    {
        var medicineinfo=medicineRepo.findById(medicineid).orElseThrow(()->new RuntimeException("Medicine id not found"));
        var disinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributor id not found"));
        var suppinfo=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplier id not found"));
        obj.setStatus("Booked");
        obj.setOrderdate(LocalDateTime.now());
        obj.setMedicine13(medicineinfo);
        obj.setSupplier18(suppinfo);
        obj.setDistributor12(disinfo);
        supplyOrderRepo.save(obj);

        disinfo.setSupplier14(suppinfo);
        distributorRepo.save(disinfo);
        return new ResponseEntity<>("Supplier Booked Medicines Successfully", HttpStatus.OK);
    }

    /* get particular supply order details of particular Distributor id - Checkdisorderlist  */
    @GetMapping("/getsupplyorders/{distributorid}")
    public ResponseEntity<?> getsupplyorders (@PathVariable Integer distributorid)
    {
        var disinfo=distributorRepo.findById(distributorid).orElseThrow(()->new RuntimeException("Distributor id not found"));
        List<SupplyOrder> supplylist=supplyOrderRepo.findByDistributor12(disinfo);
        return new ResponseEntity<>(supplylist,HttpStatus.OK);
    }

    /* Display Supplyorder status - Checksupstatus */
    @GetMapping("/displaysupplystatus/{supplierid}")
    public ResponseEntity<?> displaysupplystatus(@PathVariable Integer supplierid)
    {
        var supplist=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplierid not found"));
        List<SupplyOrder>supplyordrlist=supplyOrderRepo.findBySupplier18(supplist);
        return new ResponseEntity<>(supplyordrlist,HttpStatus.OK);
    }

}
