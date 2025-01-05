package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Entity
@Getter
@Setter
public class SupplyOrder
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer supplyorderid;
    @JsonFormat(pattern="dd-MM-yyyy hh:mm a", timezone = "Asia/Kolkata")
    private LocalDateTime orderdate;
    private Integer quantity;
    private String status;

    public SupplyOrder()
    {
    }

    public SupplyOrder(Integer supplyorderid, LocalDateTime orderdate, Integer quantity, String status, Distributor distributor12, Medicine medicine13, Supplier supplier18) {
        this.supplyorderid = supplyorderid;
        this.orderdate = orderdate;
        this.quantity = quantity;
        this.status = status;
        this.distributor12 = distributor12;
        this.medicine13 = medicine13;
        this.supplier18 = supplier18;
    }

    public Integer getSupplyorderid() {
        return supplyorderid;
    }

    public void setSupplyorderid(Integer supplyorderid) {
        this.supplyorderid = supplyorderid;
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

    public Distributor getDistributor12() {
        return distributor12;
    }

    public void setDistributor12(Distributor distributor12) {
        this.distributor12 = distributor12;
    }

    public Medicine getMedicine13() {
        return medicine13;
    }

    public void setMedicine13(Medicine medicine13) {
        this.medicine13 = medicine13;
    }

    public Supplier getSupplier18() {
        return supplier18;
    }

    public void setSupplier18(Supplier supplier18) {
        this.supplier18 = supplier18;
    }

    @ManyToOne
    @JoinColumn(name="distributorid")
    @JsonIgnore
    private Distributor distributor12;

    @ManyToOne
    @JoinColumn(name="medicineid")
    private Medicine medicine13;

    @ManyToOne
    @JoinColumn(name="supplierid")
    private Supplier supplier18;
}
