import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Star } from 'lucide-react';
import '../styles/Home.css';

const Home = () => {
    const bestSellers = [
        { id: 1, name: 'Drumstick leaves Spicy Podi / Moringa...', rating: 4.62, reviews: 1180, price: 220, image: 'https://placehold.co/400x400/e8f5e9/1b5e20?text=Moringa+Podi' },
        { id: 2, name: 'Sesame Ariselu / Adhirasam / Kajjaya', rating: 4.64, reviews: 353, price: 330, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Ariselu' },
        { id: 3, name: 'Mango Avakaya', rating: 4.61, reviews: 390, price: 220, oldPrice: 340, image: 'https://placehold.co/400x400/fff8e1/ff6f00?text=Mango+Avakaya' },
        { id: 4, name: 'Crispy ring murukku / Chegodilu', rating: 4.53, reviews: 140, price: 195, image: 'https://placehold.co/400x400/ffebee/b71c1c?text=Murukku' },
    ];

    const collections = [
        { title: 'Sweets', image: 'https://placehold.co/600x600/880e4f/ffffff?text=Sweets', route: '/collections/sweets' },
        { title: 'Snacks', image: 'https://placehold.co/600x600/3e2723/ffffff?text=Snacks', route: '/collections/snacks' },
        { title: 'Spicy Powder (PODI)', image: 'https://placehold.co/600x600/bf360c/ffffff?text=Podi', route: '/collections/spicy-powders' },
        { title: 'Pickles', image: 'https://placehold.co/600x600/f57f17/ffffff?text=Pickles', route: '/collections/pickles' },
        { title: 'Pressed Oils', image: 'https://placehold.co/600x600/5d4037/ffffff?text=Oils', route: '/collections/pressed-oils' },
        { title: 'Instant Mixes', image: 'https://placehold.co/600x600/4e342e/ffffff?text=Mixes', route: '/collections/instant-mixes' },
    ];

    return (
        <div className="home-page">
            {/* Hero Section */}
            <section className="hero-section">
                <div className="hero-banner">
                    <div className="hero-text">
                        <h2 className="hero-title">WINTER</h2>
                        <h3 className="hero-subtitle">Sale</h3>
                        <p className="hero-tagline">Is live</p>
                    </div>
                </div>
            </section>

            {/* Best Sellers Section */}
            <section className="section best-sellers container">
                <div className="section-heading">
                    <h2>BEST SELLER</h2>
                </div>
                <p className="section-subtitle">Serving traditional South Indian food from last 27 years with homemade quality.</p>

                <div className="product-grid-home">
                    {bestSellers.map(product => (
                        <div key={product.id} className="product-card-home">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                                <span className="badge-corner">Season Fresh</span>
                            </div>
                            <div className="card-details">
                                <h3 className="card-title">{product.name}</h3>
                                <div className="card-rating">
                                    <span className="rating-badge"><Star size={12} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="card-price">
                                    {product.oldPrice && <span className="old-price">Rs. {product.oldPrice}.00</span>}
                                    <span className="current-price">From Rs. {product.price}.00</span>
                                </div>
                                <div className="card-actions">
                                    <button className="btn-quick-shop">Quick Shop</button>
                                    <button className="btn-cart-icon"><ShoppingCart size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Collections Section */}
            <section className="section collections container">
                <div className="section-heading">
                    <h2>Our Collections</h2>
                </div>
                <p className="section-subtitle">Explore Delicious Products: Sweets, Snacks, Spicy Powders, Pickles and others</p>

                <div className="collections-grid">
                    {collections.map((collection, index) => (
                        <Link to={collection.route} key={index} className="collection-card">
                            <div className="collection-image">
                                <img src={collection.image} alt={collection.title} />
                            </div>
                            <h3 className="collection-title">{collection.title}</h3>
                            <p className="collection-count">20 Products</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Combo Products Section */}
            <section className="section container">
                <div className="section-heading">
                    <h2>🌟 Combo Product 🌟</h2>
                </div>
                <p className="section-subtitle">Combos: Perfect Pairings of Our Best-Selling Products</p>

                <div className="product-grid-home">
                    {[
                        { id: 101, name: 'Snacks combo pack - 11 types', rating: 4.6, reviews: 89, price: 899, oldPrice: 1049, discount: 14, image: 'https://placehold.co/400x400/fff3e0/e65100?text=Snacks+Combo' },
                        { id: 102, name: 'Christmas Special Combo', rating: 4.8, reviews: 42, price: 569, oldPrice: 699, discount: 19, image: 'https://placehold.co/400x400/ffebee/c62828?text=Christmas+Combo' },
                        { id: 103, name: 'Healthiest podis combo - 5 types', rating: 4.76, reviews: 68, price: 575, oldPrice: 660, discount: 13, image: 'https://placehold.co/400x400/e8f5e9/2e7d32?text=Podi+Combo' },
                        { id: 104, name: 'Mega Combo Pack', rating: 5.0, reviews: 1, price: 4999, oldPrice: 6099, discount: 18, image: 'https://placehold.co/400x400/fff8e1/ff8f00?text=Mega+Combo' },
                    ].map(product => (
                        <div key={product.id} className="product-card-home">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                                {product.discount && <span className="discount-badge">-{product.discount}%</span>}
                            </div>
                            <div className="card-details">
                                <h3 className="card-title">{product.name}</h3>
                                <div className="card-rating">
                                    <span className="rating-badge"><Star size={12} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="card-price">
                                    {product.oldPrice && <span className="old-price">Rs. {product.oldPrice}.00</span>}
                                    <span className="current-price">Rs. {product.price}.00</span>
                                </div>
                                <button className="btn-add-to-cart">Add To Cart <ShoppingCart size={16} /></button>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="view-all-container">
                    <Link to="/collections/combo-products">
                        <button className="btn-view-all">View All</button>
                    </Link>
                </div>
            </section>

            {/* Shop By Diet Section */}
            <section className="section container">
                <div className="section-heading">
                    <h2>🏃 Shop By Diet 🏃</h2>
                </div>
                <p className="section-subtitle">Tailored Delights for Every Dietary Preference</p>

                <div className="diet-grid">
                    {[
                        { title: 'IMMUNITY BOOSTERS', subtitle: 'No need to compromise', color: '#d7ccc8' },
                        { title: 'No OIL/ Less OIL', subtitle: 'Best for Fitness freaks', color: '#fff9c4' },
                        { title: 'VERY SPICY', subtitle: 'Delicious', color: '#cfd8dc' },
                        { title: 'DIABETIC FRIENDLY PICKS', subtitle: 'Enjoy your cravings', color: '#d7ccc8' },
                    ].map((item, index) => (
                        <div key={index} className="diet-card" style={{ backgroundColor: item.color }}>
                            <div className="diet-content">
                                <h3>{item.title}</h3>
                                <p>{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* South Indian Chutney Podi Section */}
            <section className="section container">
                <div className="section-heading">
                    <h2>❤️ South Indian Chutney Podi ❤️</h2>
                </div>
                <p className="section-subtitle">South Indian Chutney Podis: A Burst of Authentic Flavors in Every Spoonful</p>

                <div className="product-grid-home">
                    {[
                        { id: 201, name: 'Horse Gram Powder/Ulavala Karam', rating: 4.68, reviews: 75, price: 220, image: 'https://placehold.co/400x400/5d4037/ffffff?text=Horse+Gram' },
                        { id: 202, name: 'Curry Leaves Powder / Karivepaku', rating: 4.65, reviews: 219, price: 220, image: 'https://placehold.co/400x400/388e3c/ffffff?text=Curry+Leaves' },
                        { id: 203, name: 'Idli & Dosa Powder/ Milagai podi', rating: 4.79, reviews: 217, price: 220, image: 'https://placehold.co/400x400/d84315/ffffff?text=Idli+Podi' },
                        { id: 204, name: 'Coconut & garlic powder', rating: 4.72, reviews: 173, price: 220, image: 'https://placehold.co/400x400/fbc02d/ffffff?text=Coconut+Garlic' },
                    ].map(product => (
                        <div key={product.id} className="product-card-home">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="card-details">
                                <h3 className="card-title">{product.name}</h3>
                                <div className="card-rating">
                                    <span className="rating-badge"><Star size={12} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="card-price">
                                    <span className="current-price">From Rs. {product.price}.00</span>
                                </div>
                                <div className="card-actions">
                                    <button className="btn-quick-shop">Quick Shop</button>
                                    <button className="btn-cart-icon"><ShoppingCart size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Pickles Section */}
            <section className="section container">
                <div className="section-heading">
                    <h2>🏺 Pickles 🏺</h2>
                </div>
                <p className="section-subtitle">Pickles: Tangy and Tantalizing, Perfectly Spiced for Every Palate</p>

                <div className="product-grid-home">
                    {[
                        { id: 301, name: 'Mango Avakaya', rating: 4.61, reviews: 390, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/ff6f00/ffffff?text=Mango+Avakaya' },
                        { id: 302, name: 'Cut Mango / Aam ka Achar', rating: 4.62, reviews: 130, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/ff8f00/ffffff?text=Cut+Mango' },
                        { id: 303, name: 'Tomato Pickle', rating: 4.56, reviews: 297, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/d32f2f/ffffff?text=Tomato' },
                        { id: 304, name: 'Gongura Pickle', rating: 4.6, reviews: 305, price: 220, oldPrice: 840, image: 'https://placehold.co/400x400/388e3c/ffffff?text=Gongura' },
                    ].map(product => (
                        <div key={product.id} className="product-card-home">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                                <span className="badge-corner">Season Fresh</span>
                            </div>
                            <div className="card-details">
                                <h3 className="card-title">{product.name}</h3>
                                <div className="card-rating">
                                    <span className="rating-badge"><Star size={12} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="card-price">
                                    {product.oldPrice && <span className="old-price">Rs. {product.oldPrice}.00</span>}
                                    <span className="current-price">From Rs. {product.price}.00</span>
                                </div>
                                <div className="card-actions">
                                    <button className="btn-quick-shop">Quick Shop</button>
                                    <button className="btn-cart-icon"><ShoppingCart size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Sweets Section */}
            <section className="section container">
                <div className="section-heading">
                    <h2>🍪 Sweets for Everyone 🍪</h2>
                </div>
                <p className="section-subtitle">Sweets: Delight in Every Bite with Our Traditional Treats</p>

                <div className="product-grid-home">
                    {[
                        { id: 401, name: 'Jaggery Dipped Peanut / Sheng...', rating: 4.66, reviews: 86, price: 310, image: 'https://placehold.co/400x400/795548/ffffff?text=Peanut+Chikki' },
                        { id: 402, name: 'Popped jowar laddu - Jonna Pel...', rating: 4.55, reviews: 77, price: 310, image: 'https://placehold.co/400x400/fff9c4/ff8f00?text=Jowar+Laddu' },
                        { id: 403, name: 'Sunnundalu/ Urad dal Laddu', rating: 4.68, reviews: 80, price: 490, image: 'https://placehold.co/400x400/3e2723/ffffff?text=Sunnundalu' },
                        { id: 404, name: 'Gasala Attarasa', rating: 4.59, reviews: 71, price: 330, image: 'https://placehold.co/400x400/8d6e63/ffffff?text=Ariselu' },
                    ].map(product => (
                        <div key={product.id} className="product-card-home">
                            <div className="card-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                            <div className="card-details">
                                <h3 className="card-title">{product.name}</h3>
                                <div className="card-rating">
                                    <span className="rating-badge"><Star size={12} fill="white" /> {product.rating}</span>
                                    <span className="review-count">| ✅ ({product.reviews})</span>
                                </div>
                                <div className="card-price">
                                    <span className="current-price">From Rs. {product.price}.00</span>
                                </div>
                                <div className="card-actions">
                                    <button className="btn-quick-shop">Quick Shop</button>
                                    <button className="btn-cart-icon"><ShoppingCart size={18} /></button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Floating Cart Button */}
            <div className="floating-cart-btn">
                <div className="cart-vertical-text">
                    <ShoppingCart size={16} /> cart
                </div>
            </div>

            {/* WhatsApp Button */}
            <div className="whatsapp-btn">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp" />
            </div>
        </div>
    );
};

export default Home;
