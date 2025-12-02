import React, { useState, useEffect } from 'react';
import '../styles/ProductList.css';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
            .catch(error => {
                console.error('Error fetching products:', error);
                // Fallback to dummy data if backend is not running
                setProducts([
                    { id: 1, name: 'Avakaya Pickle', price: 250, image: 'https://placehold.co/400x400?text=Avakaya' },
                    { id: 2, name: 'Mango Pickle', price: 220, image: 'https://placehold.co/400x400?text=Mango' },
                    { id: 3, name: 'Tomato Pickle', price: 200, image: 'https://placehold.co/400x400?text=Tomato' },
                    { id: 4, name: 'Gongura Pickle', price: 240, image: 'https://placehold.co/400x400?text=Gongura' },
                    { id: 5, name: 'Lemon Pickle', price: 180, image: 'https://placehold.co/400x400?text=Lemon' },
                    { id: 6, name: 'Red Chilli Pickle', price: 260, image: 'https://placehold.co/400x400?text=Red+Chilli' },
                ]);
            });
    }, []);

    return (
        <div className="product-page">
            <div className="container">
                <h1 className="page-title">Pickles</h1>
                <div className="product-grid">
                    {products.map(product => (
                        <div key={product.id} className="product-card">
                            <div className="product-image-wrapper">
                                <img src={product.image || product.imageUrl} alt={product.name} className="product-image" />
                                <button className="add-to-cart-btn">Add to Cart</button>
                            </div>
                            <div className="product-info">
                                <h3 className="product-title"><a href="#">{product.name}</a></h3>
                                <p className="product-price">Rs. {product.price}.00</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductList;
