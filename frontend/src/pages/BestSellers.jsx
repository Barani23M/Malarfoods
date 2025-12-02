import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/BestSellers.css';

const BestSellers = () => {
    const products = [
        { id: 1, name: 'Drumstick leaves Spicy Podi / Moringa...', rating: 4.62, reviews: 1180, price: 220, image: 'https://placehold.co/400x400/e8f5e9/1b5e20?text=Moringa+Podi' },
        { id: 2, name: 'Sesame Ariselu / Adhirasam / Kajjaya', rating: 4.64, reviews: 353, price: 330, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Ariselu' },
        { id: 3, name: 'Mango Avakaya', rating: 4.61, reviews: 390, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/fff8e1/ff6f00?text=Mango+Avakaya', badge: 'Season Fresh' },
        { id: 4, name: 'Crispy ring murukku / Chegodilu', rating: 4.53, reviews: 140, price: 195, image: 'https://placehold.co/400x400/ffebee/b71c1c?text=Murukku' },
        { id: 5, name: 'Bitter gourd spicy powder/ karel...', rating: 4.67, reviews: 343, price: 220, image: 'https://placehold.co/400x400/f1f8e9/33691e?text=Bitter+Gourd' },
        { id: 6, name: 'Tomato Pickle', rating: 4.56, reviews: 297, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/ffebee/b71c1c?text=Tomato+Pickle' },
        { id: 7, name: 'Pootharekulu', rating: 4.73, reviews: 165, price: 450, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Pootharekulu' },
        { id: 8, name: 'Gongura Pickle', rating: 4.6, reviews: 305, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Gongura', badge: 'Season Fresh' },
        { id: 9, name: 'Sunnundalu/ Urad dal Laddu', rating: 4.68, reviews: 80, price: 490, image: 'https://placehold.co/400x400/3e2723/ffffff?text=Sunnundalu' },
        { id: 10, name: 'Gasala Attarasa', rating: 4.59, reviews: 71, price: 330, image: 'https://placehold.co/400x400/8d6e63/ffffff?text=Ariselu' },
        { id: 11, name: 'Kaju Pakam / Cashew Chikki / Jeedi...', rating: 4.8, reviews: 56, price: 450, image: 'https://placehold.co/400x400/ffecb3/ff6f00?text=Kaju+Pakam' },
        { id: 12, name: 'Madatha Kaja / Tapeswaram Kaja', rating: 4.7, reviews: 92, price: 280, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Madatha+Kaja' },
    ];

    return (
        <div className="best-sellers-page">
            {/* Banner Section */}
            <div className="page-banner">
                <div className="banner-content">
                    <h1>Best sellers</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Best sellers</span>
                    </div>
                </div>
            </div>

            <div className="container">
                {/* Toolbar */}
                <div className="toolbar">
                    <div className="filter-toggle">
                        <Filter size={20} />
                        <span>Filter</span>
                    </div>

                    <div className="view-options">
                        <LayoutList size={20} className="view-icon" />
                        <div className="view-icon active"><span className="bar"></span><span className="bar"></span></div>
                        <Grid size={20} className="view-icon" />
                        <LayoutGrid size={20} className="view-icon" />
                    </div>

                    <div className="sort-dropdown">
                        <span>Featured</span>
                        <ChevronDown size={16} />
                    </div>
                </div>

                {/* Product Grid */}
                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                {product.badge && <span className="badge-season-fresh">{product.badge}</span>}
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="product-rating">
                                    <span className="rating-box"><Star size={10} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="product-price">
                                    {product.oldPrice && <span className="old-price">Rs. {product.oldPrice}.00</span>}
                                    <span className="price">From Rs. {product.price}.00</span>
                                </div>
                                <button className="btn-quick-shop-outline">
                                    <ShoppingCart size={18} /> Quick Shop
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Floating Buttons */}
            <div className="floating-cart-btn">
                <div className="cart-vertical-text">
                    <ShoppingCart size={16} /> cart
                </div>
            </div>

            <div className="whatsapp-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </div>
        </div>
    );
};

export default BestSellers;
