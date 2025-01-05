package com.example.medicalorder.Entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Getter
@Setter
public class Manufacturecompany
{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer manfucid;
    private String manufcompanyname;

    public Manufacturecompany()
    {
    }

    public Manufacturecompany(Integer manfucid, String manufcompanyname, City city1, List<Medicine> medicine1) {
        this.manfucid = manfucid;
        this.manufcompanyname = manufcompanyname;
        this.city1 = city1;
        this.medicine1 = medicine1;
    }

    public Integer getManfucid() {
        return manfucid;
    }

    public void setManfucid(Integer manfucid) {
        this.manfucid = manfucid;
    }

    public String getManufcompanyname() {
        return manufcompanyname;
    }

    public void setManufcompanyname(String manufcompanyname) {
        this.manufcompanyname = manufcompanyname;
    }

    public City getCity1() {
        return city1;
    }

    public void setCity1(City city1) {
        this.city1 = city1;
    }

    public List<Medicine> getMedicine1() {
        return medicine1;
    }

    public void setMedicine1(List<Medicine> medicine1) {
        this.medicine1 = medicine1;
    }

    @ManyToOne
    @JoinColumn(name="cityid")
    private City city1;

    @OneToMany(mappedBy = "manufacturecompany1")
    @JsonIgnore
    private List<Medicine> medicine1;

}
