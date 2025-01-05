package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.Distributor;
import com.example.medicalorder.Entity.Supplier;
import com.example.medicalorder.Entity.SupplyOrder;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SupplyOrderRepo extends JpaRepository<SupplyOrder,Integer>
{
    List <SupplyOrder> findByDistributor12(Distributor disinfo);

    List<SupplyOrder> findBySupplier18(Supplier supplist);
}
