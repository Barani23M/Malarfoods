import React from 'react';
import { Filter, LayoutList, Grid, LayoutGrid, ChevronDown, Star, ShoppingCart } from 'lucide-react';
import '../styles/CollectionPage.css';

const SummerSpecials = () => {
    const products = [
        { id: 1, name: 'Mango Avakaya', rating: 4.61, reviews: 390, price: 220, oldPrice: 340, image: 'https://placehold.co/400x400/fff8e1/ff6f00?text=Mango+Avakaya', badge: 'Season Fresh' },
        { id: 2, name: 'Cut Mango / Aam ka Achar', rating: 4.62, reviews: 130, price: 220, oldPrice: 340, image: 'https://placehold.co/400x400/ff8f00/ffffff?text=Cut+Mango', badge: 'Season Fresh' },
        { id: 3, name: 'Magaya / Dried Mango Pickle', rating: 4.75, reviews: 85, price: 240, oldPrice: 360, image: 'https://placehold.co/400x400/ffecb3/ff6f00?text=Magaya' },
        { id: 4, name: 'Vadu Mango / Maavadu', rating: 4.8, reviews: 112, price: 260, oldPrice: 380, image: 'https://placehold.co/400x400/c8e6c9/1b5e20?text=Vadu+Mango', badge: 'Limited Stock' },
        { id: 5, name: 'Mango Thokku', rating: 4.58, reviews: 95, price: 210, oldPrice: 320, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Mango+Thokku' },
        { id: 6, name: 'Sweet Mango Pickle / Bellam Avakaya', rating: 4.7, reviews: 150, price: 250, oldPrice: 370, image: 'https://placehold.co/400x400/ffe0b2/e65100?text=Sweet+Mango' },
        { id: 7, name: 'Sun Dried Mango Slices', rating: 4.65, reviews: 60, price: 180, oldPrice: 250, image: 'https://placehold.co/400x400/fff9c4/fbc02d?text=Dried+Mango' },
        { id: 8, name: 'Mango Ginger Pickle', rating: 4.55, reviews: 78, price: 230, oldPrice: 350, image: 'https://placehold.co/400x400/f0f4c3/827717?text=Mango+Ginger' },
    ];

    return (
        <div className="collection-page">
            <div className="page-banner" style={{ background: 'linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #fecfef 100%)' }}>
                <div className="banner-content">
                    <h1>Summer Specials</h1>
                    <div className="breadcrumbs">
                        <span>Home</span> <span className="separator">&gt;</span> <span>Summer Specials</span>
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

export default SummerSpecials;
