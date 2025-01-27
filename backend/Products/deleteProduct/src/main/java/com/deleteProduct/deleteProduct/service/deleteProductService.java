package com.deleteProduct.deleteProduct.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class deleteProductService {

    @Autowired
    private deleteProductRepository deleteProductRepository;

    public void deleteProduct(Long id) {
        deleteProductRepository.deleteById(id);
    }
    
}