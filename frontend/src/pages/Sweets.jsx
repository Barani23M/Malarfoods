import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/CollectionPage.css';

const Sweets = () => {
    const products = [
        { id: 1, name: 'Jaggery Dipped Peanut / Sheng...', rating: 4.66, reviews: 86, price: 310, image: 'https://placehold.co/400x400/795548/ffffff?text=Peanut+Chikki' },
        { id: 2, name: 'Popped jowar laddu - Jonna Pel...', rating: 4.55, reviews: 77, price: 310, image: 'https://placehold.co/400x400/fff9c4/ff8f00?text=Jowar+Laddu' },
        { id: 3, name: 'Sunnundalu/ Urad dal Laddu', rating: 4.68, reviews: 80, price: 490, image: 'https://placehold.co/400x400/3e2723/ffffff?text=Sunnundalu' },
        { id: 4, name: 'Gasala Attarasa', rating: 4.59, reviews: 71, price: 330, image: 'https://placehold.co/400x400/8d6e63/ffffff?text=Ariselu' },
        { id: 5, name: 'Sesame Ariselu / Adhirasam / Kajjaya', rating: 4.64, reviews: 353, price: 330, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Sesame+Ariselu' },
        { id: 6, name: 'Pootharekulu', rating: 4.73, reviews: 165, price: 450, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Pootharekulu' },
        { id: 7, name: 'Kaju Pakam / Cashew Chikki', rating: 4.8, reviews: 56, price: 450, image: 'https://placehold.co/400x400/ffecb3/ff6f00?text=Kaju+Pakam' },
        { id: 8, name: 'Madatha Kaja / Tapeswaram Kaja', rating: 4.7, reviews: 92, price: 280, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Madatha+Kaja' },
    ];

    return (
        <div className="collection-page">
            <div className="page-banner sweets-banner">
                <div className="banner-content">
                    <h1>Sweets for Everyone</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Sweets</span>
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

export default Sweets;
