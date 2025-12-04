import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Load user from localStorage
        const savedUser = localStorage.getItem('user');
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    useEffect(() => {
        // Load cart from backend when user is available
        if (user?.id) {
            fetchCart();
        }
    }, [user]);

    const fetchCart = async () => {
        if (!user?.id) return;
        
        try {
            const response = await fetch(`http://localhost:8080/api/cart/${user.id}`);
            const data = await response.json();
            setCartItems(data);
        } catch (error) {
            console.error('Error fetching cart:', error);
        }
    };

    const addToCart = async (product, quantity = 1) => {
        if (!user?.id) {
            alert('Please login to add items to cart');
            return;
        }

        try {
            const response = await fetch('http://localhost:8080/api/cart/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    userId: user.id,
                    productId: product.id,
                    quantity: quantity
                })
            });

            if (response.ok) {
                await fetchCart();
                return true;
            }
        } catch (error) {
            console.error('Error adding to cart:', error);
        }
        return false;
    };

    const updateQuantity = async (itemId, quantity) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart/update/${itemId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ quantity })
            });

            if (response.ok) {
                await fetchCart();
            }
        } catch (error) {
            console.error('Error updating cart:', error);
        }
    };

    const removeFromCart = async (itemId) => {
        try {
            const response = await fetch(`http://localhost:8080/api/cart/remove/${itemId}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                await fetchCart();
            }
        } catch (error) {
            console.error('Error removing from cart:', error);
        }
    };

    const clearCart = async () => {
        if (!user?.id) return;

        try {
            const response = await fetch(`http://localhost:8080/api/cart/clear/${user.id}`, {
                method: 'DELETE'
            });

            if (response.ok) {
                setCartItems([]);
            }
        } catch (error) {
            console.error('Error clearing cart:', error);
        }
    };

    const getCartCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    };

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setUser(null);
        setCartItems([]);
        localStorage.removeItem('user');
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            user,
            addToCart,
            updateQuantity,
            removeFromCart,
            clearCart,
            getCartCount,
            getCartTotal,
            login,
            logout,
            fetchCart
        }}>
            {children}
        </CartContext.Provider>
    );
};
