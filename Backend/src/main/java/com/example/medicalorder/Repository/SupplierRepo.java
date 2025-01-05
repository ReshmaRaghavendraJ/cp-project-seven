package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface SupplierRepo extends JpaRepository<Supplier,Integer>
{
    Optional<Supplier> findByEmailid(String emailid);
}
