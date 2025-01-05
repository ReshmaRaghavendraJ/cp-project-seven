package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Supplier
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer supplierid;
    private String name;
    private String address;
    private String mobile;
    private String emailid;
    private String password;
    private String image;

    public Supplier()
    {

    }

    public Supplier(Integer supplierid, String name, String address, String mobile, String emailid, String password, String image,City city3, List<ShopOrder> shopOrder2, Distributor distributor11, List<SupplyOrder> supplyOrder14, List<Distributor> distributor14, Shop shop16) {
        this.supplierid = supplierid;
        this.name = name;
        this.address = address;
        this.mobile = mobile;
        this.emailid = emailid;
        this.password = password;
        this.image = image;
        this.city3 = city3;
        this.shopOrder2 = shopOrder2;
        this.distributor11 = distributor11;
        this.supplyOrder14 = supplyOrder14;
        this.distributor14 = distributor14;
        this.shop16 = shop16;
    }

    public Integer getSupplierid() {
        return supplierid;
    }

    public void setSupplierid(Integer supplierid) {
        this.supplierid = supplierid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getMobile() {
        return mobile;
    }

    public void setMobile(String mobile) {
        this.mobile = mobile;
    }

    public String getEmailid() {
        return emailid;
    }

    public void setEmailid(String emailid) {
        this.emailid = emailid;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }


    public City getCity3() {
        return city3;
    }

    public void setCity3(City city3) {
        this.city3 = city3;
    }

    public List<ShopOrder> getShopOrder2() {
        return shopOrder2;
    }

    public void setShopOrder2(List<ShopOrder> shopOrder2) {
        this.shopOrder2 = shopOrder2;
    }

    public Distributor getDistributor11() {
        return distributor11;
    }

    public void setDistributor11(Distributor distributor11) {
        this.distributor11 = distributor11;
    }

    public List<SupplyOrder> getSupplyOrder14() {
        return supplyOrder14;
    }

    public void setSupplyOrder14(List<SupplyOrder> supplyOrder14) {
        this.supplyOrder14 = supplyOrder14;
    }

    public List<Distributor> getDistributor14() {
        return distributor14;
    }

    public void setDistributor14(List<Distributor> distributor14) {
        this.distributor14 = distributor14;
    }

    public Shop getShop16() {
        return shop16;
    }

    public void setShop16(Shop shop16) {
        this.shop16 = shop16;
    }


    @ManyToOne
    @JoinColumn(name="cityid")
    private City city3;

    @OneToMany(mappedBy = "supplier8")
    @JsonIgnore
    private List<ShopOrder>shopOrder2;

    @ManyToOne
    @JoinColumn(name="distributorid")
    @JsonIgnore
    private Distributor distributor11;

    @OneToMany(mappedBy = "supplier18")
    @JsonIgnore
    private List<SupplyOrder> supplyOrder14;

    @OneToMany(mappedBy = "supplier14")
    @JsonIgnore
    private List<Distributor> distributor14;

    @ManyToOne
    @JoinColumn(name="shopid")
    private Shop shop16;
}
