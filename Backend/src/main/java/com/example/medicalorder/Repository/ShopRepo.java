package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.Shop;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ShopRepo extends JpaRepository<Shop,Integer>
{
    Optional<Shop> findByEmailid(String emailid);
}
