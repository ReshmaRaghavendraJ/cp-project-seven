package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter

public class Distributor
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer distributorid;
    private String name;
    private String address;
    private String mobile;
    private String emailid;
    private String password;
    private String image;

    public Distributor()
    {
    }

    public Distributor(Integer distributorid, String name, String address, String mobile, String emailid, String password, String image, City city2, List<ShopOrder> shopOrder3, List<Medicine> medicine10, List<Supplier> supplier12, List<SupplyOrder> supplyOrder12, Supplier supplier14) {
        this.distributorid = distributorid;
        this.name = name;
        this.address = address;
        this.mobile = mobile;
        this.emailid = emailid;
        this.password = password;
        this.image = image;
        this.city2 = city2;
        this.shopOrder3 = shopOrder3;
        this.medicine10 = medicine10;
        this.supplier12 = supplier12;
        this.supplyOrder12 = supplyOrder12;
        this.supplier14 = supplier14;
    }

    public Integer getDistributorid() {
        return distributorid;
    }

    public void setDistributorid(Integer distributorid) {
        this.distributorid = distributorid;
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


    public City getCity2() {
        return city2;
    }

    public void setCity2(City city2) {
        this.city2 = city2;
    }

    public List<ShopOrder> getShopOrder3() {
        return shopOrder3;
    }

    public void setShopOrder3(List<ShopOrder> shopOrder3) {
        this.shopOrder3 = shopOrder3;
    }

    public List<Medicine> getMedicine10() {
        return medicine10;
    }

    public void setMedicine10(List<Medicine> medicine10) {
        this.medicine10 = medicine10;
    }

    public List<Supplier> getSupplier12() {
        return supplier12;
    }

    public void setSupplier12(List<Supplier> supplier12) {
        this.supplier12 = supplier12;
    }

    public List<SupplyOrder> getSupplyOrder12() {
        return supplyOrder12;
    }

    public void setSupplyOrder12(List<SupplyOrder> supplyOrder12) {
        this.supplyOrder12 = supplyOrder12;
    }

    public Supplier getSupplier14() {
        return supplier14;
    }

    public void setSupplier14(Supplier supplier14) {
        this.supplier14 = supplier14;
    }

    @ManyToOne
    @JoinColumn(name="cityid")
    private City city2;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "distributor9")
    private List<ShopOrder> shopOrder3;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "distributor10")
    private List<Medicine> medicine10;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "distributor11")
    private List<Supplier> supplier12;

    @JsonProperty(access = JsonProperty.Access.WRITE_ONLY)
    @OneToMany(mappedBy = "distributor12")
    private List<SupplyOrder> supplyOrder12;

    @ManyToOne
    @JoinColumn(name="supplierid")
    private Supplier supplier14;
}
