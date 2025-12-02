import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/CollectionPage.css';

const Pickles = () => {
    const products = [
        { id: 1, name: 'Mango Avakaya', rating: 4.61, reviews: 390, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/ff6f00/ffffff?text=Mango+Avakaya', badge: 'Season Fresh' },
        { id: 2, name: 'Cut Mango / Aam ka Achar', rating: 4.62, reviews: 130, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/ff8f00/ffffff?text=Cut+Mango', badge: 'Season Fresh' },
        { id: 3, name: 'Tomato Pickle', rating: 4.56, reviews: 297, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/d32f2f/ffffff?text=Tomato' },
        { id: 4, name: 'Gongura Pickle', rating: 4.6, reviews: 305, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/388e3c/ffffff?text=Gongura', badge: 'Season Fresh' },
        { id: 5, name: 'Lemon Pickle', rating: 4.58, reviews: 245, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/fff9c4/ff8f00?text=Lemon' },
        { id: 6, name: 'Garlic Pickle', rating: 4.63, reviews: 198, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Garlic' },
        { id: 7, name: 'Mixed Vegetable Pickle', rating: 4.55, reviews: 167, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Mixed+Veg' },
        { id: 8, name: 'Red Chilli Pickle', rating: 4.59, reviews: 223, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/ffebee/b71c1c?text=Red+Chilli' },
    ];

    return (
        <div className="collection-page">
            <div className="page-banner pickles-banner">
                <div className="banner-content">
                    <h1>Pickles</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Pickles</span>
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

export default Pickles;
