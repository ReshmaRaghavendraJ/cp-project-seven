package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Shop
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer shopid;
    private String name;
    private String address;
    private String mobileno;
    private String emailid;
    private String password;
    private String image;
    private String location;

    public Shop()
    {
    }

    public Shop(Integer shopid, String name, String address, String mobileno, String emailid, String password, String image,String location, City city4, List<ShopOrder> shoporder7, List<Supplier> supplier16) {
        this.shopid = shopid;
        this.name = name;
        this.address = address;
        this.mobileno = mobileno;
        this.emailid = emailid;
        this.password = password;
        this.image = image;
        this.location = location;
        this.city4 = city4;
        this.shoporder7 = shoporder7;
        this.supplier16 = supplier16;
    }

    public Integer getShopid() {
        return shopid;
    }

    public void setShopid(Integer shopid) {
        this.shopid = shopid;
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

    public String getMobileno() {
        return mobileno;
    }

    public void setMobileno(String mobileno) {
        this.mobileno = mobileno;
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

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public City getCity4() {
        return city4;
    }

    public void setCity4(City city4) {
        this.city4 = city4;
    }

    public List<ShopOrder> getShoporder7() {
        return shoporder7;
    }

    public void setShoporder7(List<ShopOrder> shoporder7) {
        this.shoporder7 = shoporder7;
    }

    public List<Supplier> getSupplier16() {
        return supplier16;
    }

    public void setSupplier16(List<Supplier> supplier16) {
        this.supplier16 = supplier16;
    }

    @ManyToOne
    @JoinColumn(name="cityid")
    private City city4;

    @OneToMany(mappedBy = "shop6")
    @JsonIgnore
    private List<ShopOrder> shoporder7;

    @OneToMany(mappedBy = "shop16")
    @JsonIgnore
    private List<Supplier> supplier16;
}
