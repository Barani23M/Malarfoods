package com.malarfoods.backend.config;

import com.malarfoods.backend.model.Product;
import com.malarfoods.backend.model.User;
import com.malarfoods.backend.repository.ProductRepository;
import com.malarfoods.backend.repository.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class DataInitializer {

    @Bean
    CommandLineRunner initDatabase(UserRepository userRepository, ProductRepository productRepository) {
        return args -> {
            // Initialize default users
            if (userRepository.count() == 0) {
                User admin = new User();
                admin.setUsername("admin");
                admin.setPassword("admin123");
                admin.setRole("ADMIN");
                userRepository.save(admin);
                
                User testUser = new User();
                testUser.setUsername("user");
                testUser.setPassword("user123");
                testUser.setRole("USER");
                userRepository.save(testUser);
                
                System.out.println("Default users created: admin/admin123 and user/user123");
            }
            
            // Initialize sample products
            if (productRepository.count() == 0) {
                // Pickles
                productRepository.save(createProduct("Avakaya Pickle", "Traditional spicy mango pickle", 250.0, "Pickles", "https://placehold.co/400x400?text=Avakaya", 50, true, true));
                productRepository.save(createProduct("Mango Pickle", "Sweet and sour mango pickle", 220.0, "Pickles", "https://placehold.co/400x400?text=Mango", 40, false, true));
                productRepository.save(createProduct("Tomato Pickle", "Tangy tomato pickle", 200.0, "Pickles", "https://placehold.co/400x400?text=Tomato", 35, false, false));
                productRepository.save(createProduct("Gongura Pickle", "Authentic Andhra gongura pickle", 240.0, "Pickles", "https://placehold.co/400x400?text=Gongura", 45, true, false));
                productRepository.save(createProduct("Lemon Pickle", "Zesty lemon pickle", 180.0, "Pickles", "https://placehold.co/400x400?text=Lemon", 60, false, false));
                productRepository.save(createProduct("Red Chilli Pickle", "Extra spicy red chilli pickle", 260.0, "Pickles", "https://placehold.co/400x400?text=Red+Chilli", 30, false, false));
                
                // Sweets
                productRepository.save(createProduct("Mysore Pak", "Classic South Indian sweet", 300.0, "Sweets", "https://placehold.co/400x400?text=Mysore+Pak", 25, true, true));
                productRepository.save(createProduct("Laddu", "Traditional besan laddu", 250.0, "Sweets", "https://placehold.co/400x400?text=Laddu", 30, false, true));
                productRepository.save(createProduct("Jalebi", "Crispy sweet jalebi", 200.0, "Sweets", "https://placehold.co/400x400?text=Jalebi", 20, false, false));
                productRepository.save(createProduct("Gulab Jamun", "Soft and delicious gulab jamun", 280.0, "Sweets", "https://placehold.co/400x400?text=Gulab+Jamun", 35, true, false));
                productRepository.save(createProduct("Kaju Katli", "Premium cashew sweet", 450.0, "Sweets", "https://placehold.co/400x400?text=Kaju+Katli", 15, true, true));
                
                // Snacks
                productRepository.save(createProduct("Murukku", "Crunchy rice murukku", 150.0, "Snacks", "https://placehold.co/400x400?text=Murukku", 50, false, true));
                productRepository.save(createProduct("Mixture", "Spicy mixture namkeen", 120.0, "Snacks", "https://placehold.co/400x400?text=Mixture", 60, true, false));
                productRepository.save(createProduct("Chakli", "Spiral shaped chakli", 140.0, "Snacks", "https://placehold.co/400x400?text=Chakli", 45, false, false));
                productRepository.save(createProduct("Sev", "Fine sev namkeen", 100.0, "Snacks", "https://placehold.co/400x400?text=Sev", 70, false, false));
                productRepository.save(createProduct("Banana Chips", "Crispy banana chips", 130.0, "Snacks", "https://placehold.co/400x400?text=Banana+Chips", 55, false, true));
                
                // Spicy Powders
                productRepository.save(createProduct("Gunpowder Chutney", "Spicy gun powder", 180.0, "Spicy Powders", "https://placehold.co/400x400?text=Gunpowder", 40, true, true));
                productRepository.save(createProduct("Curry Leaf Powder", "Aromatic curry leaf powder", 160.0, "Spicy Powders", "https://placehold.co/400x400?text=Curry+Leaf", 35, false, false));
                productRepository.save(createProduct("Sambar Powder", "Authentic sambar powder", 140.0, "Spicy Powders", "https://placehold.co/400x400?text=Sambar", 50, false, true));
                productRepository.save(createProduct("Rasam Powder", "Traditional rasam powder", 150.0, "Spicy Powders", "https://placehold.co/400x400?text=Rasam", 45, false, false));
                
                // Instant Mixes
                productRepository.save(createProduct("Dosa Mix", "Ready to make dosa mix", 200.0, "Instant Mixes", "https://placehold.co/400x400?text=Dosa+Mix", 40, false, false));
                productRepository.save(createProduct("Idli Mix", "Instant idli mix", 180.0, "Instant Mixes", "https://placehold.co/400x400?text=Idli+Mix", 35, false, false));
                productRepository.save(createProduct("Vada Mix", "Crispy vada mix", 160.0, "Instant Mixes", "https://placehold.co/400x400?text=Vada+Mix", 30, false, false));
                
                // Oils
                productRepository.save(createProduct("Sesame Oil", "Cold pressed sesame oil", 350.0, "Oils", "https://placehold.co/400x400?text=Sesame+Oil", 25, true, false));
                productRepository.save(createProduct("Coconut Oil", "Pure coconut oil", 320.0, "Oils", "https://placehold.co/400x400?text=Coconut+Oil", 30, true, false));
                productRepository.save(createProduct("Groundnut Oil", "Wooden pressed groundnut oil", 300.0, "Oils", "https://placehold.co/400x400?text=Groundnut+Oil", 28, false, false));
                
                // Summer Specials
                productRepository.save(createProduct("Mango Pachadi", "Sweet mango pachadi", 220.0, "Summer Specials", "https://placehold.co/400x400?text=Mango+Pachadi", 20, true, false));
                productRepository.save(createProduct("Raw Mango Powder", "Tangy raw mango powder", 180.0, "Summer Specials", "https://placehold.co/400x400?text=Raw+Mango", 25, false, false));
                productRepository.save(createProduct("Buttermilk Powder", "Instant buttermilk mix", 150.0, "Summer Specials", "https://placehold.co/400x400?text=Buttermilk", 30, false, false));
                
                // Immunity Boosters
                productRepository.save(createProduct("Turmeric Powder", "Organic turmeric powder", 120.0, "Immunity", "https://placehold.co/400x400?text=Turmeric", 50, false, false));
                productRepository.save(createProduct("Giloy Powder", "Natural giloy powder", 180.0, "Immunity", "https://placehold.co/400x400?text=Giloy", 30, false, false));
                productRepository.save(createProduct("Ashwagandha Powder", "Pure ashwagandha powder", 200.0, "Immunity", "https://placehold.co/400x400?text=Ashwagandha", 25, false, false));
                
                // Diabetic Products
                productRepository.save(createProduct("Sugar Free Laddu", "Diabetic friendly laddu", 280.0, "Diabetic", "https://placehold.co/400x400?text=Sugar+Free+Laddu", 20, false, false));
                productRepository.save(createProduct("Ragi Cookies", "Healthy ragi cookies", 150.0, "Diabetic", "https://placehold.co/400x400?text=Ragi+Cookies", 40, false, false));
                productRepository.save(createProduct("Millet Mix", "Multi millet health mix", 220.0, "Diabetic", "https://placehold.co/400x400?text=Millet+Mix", 35, false, false));
                
                System.out.println("Sample products initialized successfully!");
            }
        };
    }
    
    private Product createProduct(String name, String description, Double price, String category, 
                                 String imageUrl, Integer stock, Boolean featured, Boolean bestSeller) {
        Product product = new Product();
        product.setName(name);
        product.setDescription(description);
        product.setPrice(price);
        product.setCategory(category);
        product.setImageUrl(imageUrl);
        product.setStock(stock);
        product.setFeatured(featured);
        product.setBestSeller(bestSeller);
        return product;
    }
}
