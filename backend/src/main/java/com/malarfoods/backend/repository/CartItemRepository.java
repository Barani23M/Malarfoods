package com.malarfoods.backend.repository;

import com.malarfoods.backend.model.CartItem;
import com.malarfoods.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface CartItemRepository extends JpaRepository<CartItem, Long> {
    List<CartItem> findByUser(User user);
    List<CartItem> findByUserId(Long userId);
    Optional<CartItem> findByUserAndProductId(User user, Long productId);
    void deleteByUserId(Long userId);
}
