package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Getter
@Setter
public class ShopOrder
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer shoporderid;
    @JsonFormat(pattern="dd-MM-yyyy hh:mm a", timezone = "Asia/Kolkata")
    private LocalDateTime orderdate;
    private Integer quantity;
    private String status;

    public ShopOrder()
    {
    }

    public ShopOrder(Integer shoporderid, LocalDateTime orderdate, Integer quantity, String status, Medicine medicine6, Supplier supplier8, Distributor distributor9, Shop shop6) {
        this.shoporderid = shoporderid;
        this.orderdate = orderdate;
        this.quantity = quantity;
        this.status = status;
        this.medicine6 = medicine6;
        this.supplier8 = supplier8;
        this.distributor9 = distributor9;
        this.shop6 = shop6;
    }

    public Integer getShoporderid() {
        return shoporderid;
    }

    public void setShoporderid(Integer shoporderid) {
        this.shoporderid = shoporderid;
    }

    public LocalDateTime getOrderdate() {
        return orderdate;
    }

    public void setOrderdate(LocalDateTime orderdate) {
        this.orderdate = orderdate;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Medicine getMedicine6() {
        return medicine6;
    }

    public void setMedicine6(Medicine medicine6) {
        this.medicine6 = medicine6;
    }

    public Supplier getSupplier8() {
        return supplier8;
    }

    public void setSupplier8(Supplier supplier8) {
        this.supplier8 = supplier8;
    }

    public Distributor getDistributor9() {
        return distributor9;
    }

    public void setDistributor9(Distributor distributor9) {
        this.distributor9 = distributor9;
    }

    public Shop getShop6() {
        return shop6;
    }

    public void setShop6(Shop shop6) {
        this.shop6 = shop6;
    }


    @ManyToOne
    @JoinColumn(name="medicineid")
    private Medicine medicine6;

    @ManyToOne
    @JoinColumn(name="supplierid")
    private Supplier supplier8;

    @ManyToOne
    @JoinColumn(name="distributorid")
    @JsonIgnore
    private Distributor distributor9;

    @ManyToOne
    @JoinColumn(name="shopid")
    private Shop shop6;

}
