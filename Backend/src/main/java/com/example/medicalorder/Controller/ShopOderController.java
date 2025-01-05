package com.example.medicalorder.Controller;

import com.example.medicalorder.Entity.ShopOrder;
import com.example.medicalorder.Entity.Supplier;
import com.example.medicalorder.Repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@CrossOrigin("*")
public class ShopOderController
{
    @Autowired
    DistributorRepo distributorRepo;

    @Autowired
    ShopOrderRepo shopOrderRepo;

    @Autowired
    ShopRepo shopRepo;

    @Autowired
    MedicineRepo medicineRepo;

    @Autowired
    SupplierRepo supplierRepo;

    /* Book Medicine- fill Shop Oder table in Shop Dashboard */
    @PostMapping("/bookmedicines/{medicineid}/{supplierid}/{shopid}")
    public ResponseEntity<?> bookmedicines(@PathVariable Integer medicineid,@PathVariable Integer supplierid,@PathVariable Integer shopid,@RequestBody ShopOrder obj)
    {
        var medinfo=medicineRepo.findById(medicineid).orElseThrow(()->new RuntimeException("Medcine id not found"));
        var supinfo=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplier id not found"));
        var shopinfo=shopRepo.findById(shopid).orElseThrow(()->new RuntimeException("Shop id not found"));
        obj.setStatus("Booked");
        obj.setShop6(shopinfo);
        obj.setMedicine6(medinfo);
        obj.setSupplier8(supinfo);
        obj.setDistributor9(medinfo.getDistributor10());
        obj.setOrderdate(LocalDateTime.now());
        shopOrderRepo.save(obj);

        supinfo.setShop16(shopinfo);
        supplierRepo.save(supinfo);
        return new ResponseEntity<>("Shop Booked medicine Successfully", HttpStatus.OK);
    }

    /* Display Orderlist - Check order list */
    @GetMapping("/getallordersshop")
    public ResponseEntity<?> getallordersshop()
    {
        List<ShopOrder> orderlist=shopOrderRepo.findAll();
        return new ResponseEntity<>(orderlist,HttpStatus.OK);
    }

    /* Get particular shop orders details - Checksuporderlist   */
    @GetMapping("/getshoporders/{supplierid}")
    public ResponseEntity<?> getshoporders(@PathVariable Integer supplierid)
    {
        var supinfo=supplierRepo.findById(supplierid).orElseThrow(()->new RuntimeException("Supplier id not found"));
        List<ShopOrder> orders =shopOrderRepo.findBySupplier8(supinfo);
        return new ResponseEntity<>(orders,HttpStatus.OK);
    }

    /* Display Status - Checkshopstatus - (ShopDashboard) */
    @GetMapping("/displayshopstatus/{shopid}")
    public ResponseEntity<?> displayshopstatus(@PathVariable Integer shopid)
    {
        var shpinfor=shopRepo.findById(shopid).orElseThrow(()->new RuntimeException("Shopid not found"));
        List<ShopOrder>shpordrlist=shopOrderRepo.findByShop6(shpinfor);
        return new ResponseEntity<>(shpordrlist,HttpStatus.OK);
    }
}
