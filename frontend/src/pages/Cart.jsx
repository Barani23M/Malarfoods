import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus } from 'lucide-react';
import '../styles/Cart.css';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, getCartTotal, user } = useCart();
    const navigate = useNavigate();

    const handleCheckout = () => {
        if (!user) {
            alert('Please login to checkout');
            navigate('/login');
            return;
        }
        navigate('/checkout');
    };

    if (cartItems.length === 0) {
        return (
            <div className="cart-page">
                <div className="container">
                    <h1 className="page-title">Shopping Cart</h1>
                    <div className="empty-cart">
                        <p>Your cart is empty</p>
                        <button onClick={() => navigate('/')} className="btn-continue">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="cart-page">
            <div className="container">
                <h1 className="page-title">Shopping Cart ({cartItems.length} items)</h1>
                
                <div className="cart-content">
                    <div className="cart-items">
                        {cartItems.map(item => (
                            <div key={item.id} className="cart-item">
                                <img 
                                    src={item.product.imageUrl} 
                                    alt={item.product.name}
                                    className="cart-item-image"
                                />
                                <div className="cart-item-details">
                                    <h3>{item.product.name}</h3>
                                    <p className="cart-item-price">Rs. {item.product.price}.00</p>
                                </div>
                                <div className="cart-item-quantity">
                                    <button 
                                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                                        className="qty-btn"
                                    >
                                        <Minus size={16} />
                                    </button>
                                    <span className="qty-value">{item.quantity}</span>
                                    <button 
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        className="qty-btn"
                                    >
                                        <Plus size={16} />
                                    </button>
                                </div>
                                <div className="cart-item-total">
                                    Rs. {(item.product.price * item.quantity).toFixed(2)}
                                </div>
                                <button 
                                    onClick={() => removeFromCart(item.id)}
                                    className="cart-item-remove"
                                >
                                    <Trash2 size={20} />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h2>Order Summary</h2>
                        <div className="summary-row">
                            <span>Subtotal:</span>
                            <span>Rs. {getCartTotal().toFixed(2)}</span>
                        </div>
                        <div className="summary-row">
                            <span>Shipping:</span>
                            <span>Rs. 50.00</span>
                        </div>
                        <div className="summary-row total">
                            <span>Total:</span>
                            <span>Rs. {(getCartTotal() + 50).toFixed(2)}</span>
                        </div>
                        <button onClick={handleCheckout} className="btn-checkout">
                            Proceed to Checkout
                        </button>
                        <button onClick={() => navigate('/')} className="btn-continue">
                            Continue Shopping
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
