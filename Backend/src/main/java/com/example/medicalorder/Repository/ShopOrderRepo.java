package com.example.medicalorder.Repository;

import com.example.medicalorder.Entity.Shop;
import com.example.medicalorder.Entity.ShopOrder;
import com.example.medicalorder.Entity.Supplier;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ShopOrderRepo extends JpaRepository<ShopOrder,Integer>
{

    List<ShopOrder> findBySupplier8(Supplier supinfo);

    List<ShopOrder> findByShop6(Shop shpinfor);
}
