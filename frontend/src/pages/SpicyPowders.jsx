import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/CollectionPage.css';

const SpicyPowders = () => {
    const products = [
        { id: 1, name: 'Drumstick leaves Spicy Podi / Moringa...', rating: 4.62, reviews: 1180, price: 220, image: 'https://placehold.co/400x400/e8f5e9/1b5e20?text=Moringa+Podi' },
        { id: 2, name: 'Horse Gram Powder/Ulavala Karam', rating: 4.68, reviews: 75, price: 220, image: 'https://placehold.co/400x400/5d4037/ffffff?text=Horse+Gram' },
        { id: 3, name: 'Curry Leaves Powder / Karivepaku', rating: 4.65, reviews: 219, price: 220, image: 'https://placehold.co/400x400/388e3c/ffffff?text=Curry+Leaves' },
        { id: 4, name: 'Idli & Dosa Powder/ Milagai podi', rating: 4.79, reviews: 217, price: 220, image: 'https://placehold.co/400x400/d84315/ffffff?text=Idli+Podi' },
        { id: 5, name: 'Coconut & garlic powder', rating: 4.72, reviews: 173, price: 220, image: 'https://placehold.co/400x400/fbc02d/ffffff?text=Coconut+Garlic' },
        { id: 6, name: 'Bitter gourd spicy powder/ karel...', rating: 4.67, reviews: 343, price: 220, image: 'https://placehold.co/400x400/f1f8e9/33691e?text=Bitter+Gourd' },
        { id: 7, name: 'Flax seeds Spicy Podi / Avise Ginj...', rating: 4.71, reviews: 156, price: 220, image: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Flax+Seeds' },
        { id: 8, name: 'Sesame seeds Spicy Podi / Nuvvula...', rating: 4.69, reviews: 189, price: 220, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Sesame' },
    ];

    return (
        <div className="collection-page">
            <div className="page-banner spicy-banner">
                <div className="banner-content">
                    <h1>Spicy Powders</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Spicy Powders</span>
                    </div>
                </div>
            </div>

            <div className="container">
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

                <div className="products-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="product-rating">
                                    <span className="rating-box"><Star size={10} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="product-price">
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

export default SpicyPowders;
