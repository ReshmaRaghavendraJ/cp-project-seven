package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.Medicine;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MedicineRepo extends JpaRepository<Medicine,Integer>
{
}
