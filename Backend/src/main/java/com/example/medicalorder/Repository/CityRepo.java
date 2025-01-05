package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.City;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CityRepo extends JpaRepository<City,Integer>
{
}
