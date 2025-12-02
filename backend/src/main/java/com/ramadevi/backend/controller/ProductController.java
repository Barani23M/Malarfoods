package com.ramadevi.backend.controller;

import com.ramadevi.backend.model.Product;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/products")
@CrossOrigin(origins = "http://localhost:5173") // Allow frontend access
public class ProductController {

    @GetMapping
    public List<Product> getAllProducts() {
        // Return dummy data for now to match frontend
        return Arrays.asList(
            new Product(1L, "Avakaya Pickle", 250.0, "https://placehold.co/400x400?text=Avakaya", "pickles"),
            new Product(2L, "Mango Pickle", 220.0, "https://placehold.co/400x400?text=Mango", "pickles"),
            new Product(3L, "Tomato Pickle", 200.0, "https://placehold.co/400x400?text=Tomato", "pickles"),
            new Product(4L, "Gongura Pickle", 240.0, "https://placehold.co/400x400?text=Gongura", "pickles"),
            new Product(5L, "Lemon Pickle", 180.0, "https://placehold.co/400x400?text=Lemon", "pickles"),
            new Product(6L, "Red Chilli Pickle", 260.0, "https://placehold.co/400x400?text=Red+Chilli", "pickles")
        );
    }
}
