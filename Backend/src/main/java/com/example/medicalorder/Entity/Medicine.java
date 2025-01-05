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
public class Medicine
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer medicineid;
    private String name;
    private String price;
    private String form;

    public Medicine()
    {
    }

    public Medicine(Integer medicineid, String name, String price, String form, Manufacturecompany manufacturecompany1, List<ShopOrder> shoporder1, Distributor distributor10, List<SupplyOrder> supplyOrder13) {
        this.medicineid = medicineid;
        this.name = name;
        this.price = price;
        this.form = form;
        this.manufacturecompany1 = manufacturecompany1;
        this.shoporder1 = shoporder1;
        this.distributor10 = distributor10;
        this.supplyOrder13 = supplyOrder13;
    }

    public Integer getMedicineid() {
        return medicineid;
    }

    public void setMedicineid(Integer medicineid) {
        this.medicineid = medicineid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }

    public String getForm() {
        return form;
    }

    public void setForm(String form) {
        this.form = form;
    }


    public Manufacturecompany getManufacturecompany1() {
        return manufacturecompany1;
    }

    public void setManufacturecompany1(Manufacturecompany manufacturecompany1) {
        this.manufacturecompany1 = manufacturecompany1;
    }

    public List<ShopOrder> getShoporder1() {
        return shoporder1;
    }

    public void setShoporder1(List<ShopOrder> shoporder1) {
        this.shoporder1 = shoporder1;
    }

    public Distributor getDistributor10() {
        return distributor10;
    }

    public void setDistributor10(Distributor distributor10) {
        this.distributor10 = distributor10;
    }

    public List<SupplyOrder> getSupplyOrder13() {
        return supplyOrder13;
    }

    public void setSupplyOrder13(List<SupplyOrder> supplyOrder13) {
        this.supplyOrder13 = supplyOrder13;
    }

    @ManyToOne
    @JoinColumn(name="manfucid")
    private Manufacturecompany manufacturecompany1;

    @OneToMany(mappedBy = "medicine6")
    @JsonIgnore
    private List<ShopOrder> shoporder1;

    @ManyToOne
    @JoinColumn(name="distributorid")
    @JsonIgnore
    private Distributor distributor10;

    @OneToMany(mappedBy = "medicine13")
    @JsonIgnore
    private List<SupplyOrder> supplyOrder13;


}
