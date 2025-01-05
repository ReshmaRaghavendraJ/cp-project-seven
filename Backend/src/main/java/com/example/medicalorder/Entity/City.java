package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class City
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer cityid;
    private String city;

    public City()
    {
    }

    public City(Integer cityid, String city, List<Manufacturecompany> manufacturecompany1, List<Distributor> distributor1, List<Supplier> supplier1, List<Shop> shop1) {
        this.cityid = cityid;
        this.city = city;
        this.manufacturecompany1 = manufacturecompany1;
        this.distributor1 = distributor1;
        this.supplier1 = supplier1;
        this.shop1 = shop1;
    }

    public Integer getCityid() {
        return cityid;
    }

    public void setCityid(Integer cityid) {
        this.cityid = cityid;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public List<Manufacturecompany> getManufacturecompany1() {
        return manufacturecompany1;
    }

    public void setManufacturecompany1(List<Manufacturecompany> manufacturecompany1) {
        this.manufacturecompany1 = manufacturecompany1;
    }

    public List<Distributor> getDistributor1() {
        return distributor1;
    }

    public void setDistributor1(List<Distributor> distributor1) {
        this.distributor1 = distributor1;
    }

    public List<Supplier> getSupplier1() {
        return supplier1;
    }

    public void setSupplier1(List<Supplier> supplier1) {
        this.supplier1 = supplier1;
    }

    public List<Shop> getShop1() {
        return shop1;
    }

    public void setShop1(List<Shop> shop1) {
        this.shop1 = shop1;
    }

    @OneToMany(mappedBy = "city1")
    @JsonIgnore
    private List<Manufacturecompany> manufacturecompany1;

    @OneToMany(mappedBy = "city2")
    @JsonIgnore
    private List<Distributor>distributor1;

    @OneToMany(mappedBy = "city3")
    @JsonIgnore
    private List<Supplier>supplier1;

    @OneToMany(mappedBy = "city4")
    @JsonIgnore
    private List<Shop>shop1;


}
