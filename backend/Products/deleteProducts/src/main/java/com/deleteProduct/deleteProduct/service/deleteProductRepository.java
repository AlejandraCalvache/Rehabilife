package com.deleteProduct.deleteProduct.service;

import com.deleteProduct.deleteProduct.models.deleteProductModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface deleteProductRepository extends JpaRepository<deleteProductModel, Long>{
    
}
