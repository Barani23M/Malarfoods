import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/CollectionPage.css';

const ComboProducts = () => {
    const products = [
        { id: 1, name: 'Snacks combo pack - 11 types of...', rating: 4.6, reviews: 89, price: 899, oldPrice: 1049, discount: 14, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Snacks+Combo' },
        { id: 2, name: 'Christmas Special Combo', rating: 4.8, reviews: 42, price: 569, oldPrice: 699, discount: 19, image: 'https://placehold.co/400x400/ffebee/c62828?text=Christmas+Combo' },
        { id: 3, name: 'Healthiest podis combo - 5 types', rating: 4.76, reviews: 68, price: 575, oldPrice: 660, discount: 13, image: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Podi+Combo' },
        { id: 4, name: 'Mega Combo Pack', rating: 5.0, reviews: 1, price: 4999, oldPrice: 6099, discount: 18, image: 'https://placehold.co/400x400/fff8e1/ff8f00?text=Mega+Combo' },
        { id: 5, name: 'Sweets combo pack - 8 types', rating: 4.7, reviews: 45, price: 799, oldPrice: 950, discount: 16, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Sweets+Combo' },
        { id: 6, name: 'Pickles combo - 6 varieties', rating: 4.65, reviews: 78, price: 1099, oldPrice: 1320, discount: 17, image: 'https://placehold.co/400x400/fff8e1/ff6f00?text=Pickle+Combo' },
    ];

    return (
        <div className="collection-page">
            <div className="page-banner combo-banner">
                <div className="banner-content">
                    <h1>Combo Products</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Combo Products</span>
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
                                {product.discount && <span className="discount-badge">-{product.discount}%</span>}
                            </div>
                            <div className="product-info">
                                <h3 className="product-title">{product.name}</h3>
                                <div className="product-rating">
                                    <span className="rating-box"><Star size={10} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="product-price">
                                    {product.oldPrice && <span className="old-price">Rs. {product.oldPrice}.00</span>}
                                    <span className="price">Rs. {product.price}.00</span>
                                </div>
                                <button className="btn-add-to-cart">
                                    Add To Cart <ShoppingCart size={16} />
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

export default ComboProducts;
