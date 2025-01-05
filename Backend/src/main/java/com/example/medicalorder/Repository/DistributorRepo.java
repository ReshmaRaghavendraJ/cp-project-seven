package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.Distributor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DistributorRepo extends JpaRepository<Distributor,Integer> {
    Optional<Distributor> findByEmailid(String emailid);
}
