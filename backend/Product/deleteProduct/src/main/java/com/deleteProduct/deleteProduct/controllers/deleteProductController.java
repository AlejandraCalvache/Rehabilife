package com.deleteProduct.deleteProduct.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.deleteProduct.deleteProduct.service.deleteProductService;


@RestController
@RequestMapping("/deleteProduct")
public class deleteProductController {

    @Autowired
    private deleteProductService deleteProductService;

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteProduct(@PathVariable Long id) {
        deleteProductService.deleteProduct(id);
        return ResponseEntity.ok().build();
    }
    
}