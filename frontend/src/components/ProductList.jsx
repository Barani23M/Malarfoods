import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    const { addToCart } = useCart();

    // Extract category from path
    const categorySlug = location.pathname.split('/').pop();

    const getCategoryDetails = (slug) => {
        switch(slug) {
            case 'sweets': return { title: 'Sweets', filter: 'Sweets' };
            case 'snacks': return { title: 'Snacks', filter: 'Snacks' };
            case 'pickles': return { title: 'Pickles', filter: 'Pickles' };
            case 'spicy-powders': return { title: 'Spicy Powders', filter: 'Spicy Powders' };
            case 'instant-mixes': return { title: 'Instant Mixes', filter: 'Instant Mixes' };
            case 'oils': return { title: 'Wooden Pressed Oils', filter: 'Oils' };
            case 'additional': return { title: 'Additional Products', filter: 'Additional' };
            case 'no-oil': return { title: 'No Oil / Less Oil', filter: 'No Oil' };
            case 'immunity': return { title: 'Immunity Boosters', filter: 'Immunity' };
            case 'diabetic': return { title: 'Diabetic Check', filter: 'Diabetic' };
            case 'summer-specials': return { title: 'Summer Specials', filter: 'Summer Specials' };
            case 'all': 
            default: return { title: 'All Products', filter: null };
        }
    };

    const { title, filter } = getCategoryDetails(categorySlug);

    useEffect(() => {
        setLoading(true);
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => {
                if (filter) {
                    const filtered = data.filter(p => 
                        p.category && p.category.toLowerCase().includes(filter.toLowerCase())
                    );
                    setProducts(filtered);
                } else {
                    setProducts(data);
                }
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching products:', error);
                setProducts([]);
                setLoading(false);
            });
    }, [filter]);

    const handleAddToCart = async (product) => {
        const success = await addToCart(product, 1);
        if (success) {
            alert(`${product.name} added to cart!`);
        }
    };

    if (loading) {
        return (
            <div className="product-page">
                <div className="container">
                    <p>Loading products...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="product-page">
            <div className="container">
                <h1 className="page-title">{title}</h1>
                <div className="product-grid">
                    {products.length > 0 ? (
                        products.map(product => (
                            <div key={product.id} className="product-card">
                                <div className="product-image-wrapper">
                                    <img src={product.imageUrl || product.image} alt={product.name} className="product-image" />
                                    <button 
                                        className="add-to-cart-btn"
                                        onClick={() => handleAddToCart(product)}
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                                <div className="product-info">
                                    <h3 className="product-title"><a href="#">{product.name}</a></h3>
                                    <p className="product-description">{product.description}</p>
                                    <p className="product-price">Rs. {product.price}.00</p>
                                    {product.stock < 10 && product.stock > 0 && (
                                        <p className="stock-warning">Only {product.stock} left!</p>
                                    )}
                                    {product.stock === 0 && (
                                        <p className="out-of-stock">Out of Stock</p>
                                    )}
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products found in this category.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
