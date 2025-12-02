import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/CollectionPage.css';

const Snacks = () => {
    const products = [
        { id: 1, name: 'Crispy ring murukku / Chegodilu', rating: 4.53, reviews: 140, price: 195, image: 'https://placehold.co/400x400/ffebee/b71c1c?text=Murukku' },
        { id: 2, name: 'Ribbon Pakoda / Ola Pakoda', rating: 4.61, reviews: 112, price: 195, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Ribbon+Pakoda' },
        { id: 3, name: 'Mixture / Chivda', rating: 4.58, reviews: 156, price: 180, image: 'https://placehold.co/400x400/fff8e1/ff8f00?text=Mixture' },
        { id: 4, name: 'Kara Sev / Spicy Sev', rating: 4.62, reviews: 134, price: 185, image: 'https://placehold.co/400x400/ffebee/c62828?text=Kara+Sev' },
        { id: 5, name: 'Boondi / Boondhi', rating: 4.56, reviews: 98, price: 175, image: 'https://placehold.co/400x400/fff9c4/ff8f00?text=Boondi' },
        { id: 6, name: 'Chakli / Murukku', rating: 4.64, reviews: 145, price: 195, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Chakli' },
        { id: 7, name: 'Banana Chips', rating: 4.59, reviews: 187, price: 165, image: 'https://placehold.co/400x400/fff8e1/ff6f00?text=Banana+Chips' },
        { id: 8, name: 'Potato Chips', rating: 4.57, reviews: 203, price: 160, image: 'https://placehold.co/400x400/ffecb3/ff8f00?text=Potato+Chips' },
    ];

    return (
        <div className="collection-page">
            <div className="page-banner snacks-banner">
                <div className="banner-content">
                    <h1>Snacks</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Snacks</span>
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

export default Snacks;
