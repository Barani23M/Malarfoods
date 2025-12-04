import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const { getCartCount, user, logout } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleDropdown = (name, e) => {
        e.preventDefault();
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const handleLogout = () => {
        logout();
        setIsMobileMenuOpen(false);
    };

    return (
        <>
            <div className="top-bar">
                <div className="container top-bar-content">
                    <p>Winter Sale Is Live... <strong>Click Here</strong></p>
                    <p className="hidden-mobile">Combo Sale Is Live!!! <strong>Click Here</strong></p>
                    <p className="hidden-mobile">Newly launched: Mega Combo</p>
                </div>
            </div>

            <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
                <div className="container header-container">
                    <div className="mobile-menu-toggle" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </div>

                    <div className="logo">
                        <Link to="/">
                            {/* Using a text placeholder styled to look like the logo for now */}
                            <div className="logo-wrapper">
                                <span className="logo-icon">👩‍🍳</span>
                                <div className="logo-text-group">
                                    <span className="brand-name">Malarfoods</span>
                                    <span className="brand-suffix">FOODS</span>
                                    <span className="brand-tagline">Taste of Home</span>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <nav className={`nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li>
                                <Link to="/collections/best-sellers" className="nav-item-highlight">
                                    Best Sellers <span className="badge">Top Selling</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/collections/combo-products">
                                    Combo Products <span className="badge sale">Sale</span>
                                </Link>
                            </li>
                            <li><Link to="/collections/spicy-powders">Spicy Powders</Link></li>
                            <li>
                                <Link to="/collections/summer-specials">
                                    Summer Specials <span className="badge new">New</span>
                                </Link>
                            </li>
                            <li className={`has-dropdown ${activeDropdown === 'category' ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => toggleDropdown('category', e)}>Category <ChevronDown size={14} /></Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/collections/all" onClick={() => setIsMobileMenuOpen(false)}>All collections</Link></li>
                                    <li><Link to="/collections/sweets" onClick={() => setIsMobileMenuOpen(false)}>Sweets</Link></li>
                                    <li><Link to="/collections/snacks" onClick={() => setIsMobileMenuOpen(false)}>Snacks</Link></li>
                                    <li><Link to="/collections/pickles" onClick={() => setIsMobileMenuOpen(false)}>Pickles</Link></li>
                                    <li><Link to="/collections/spicy-powders" onClick={() => setIsMobileMenuOpen(false)}>Spicy chutney powders</Link></li>
                                    <li><Link to="/collections/instant-mixes" onClick={() => setIsMobileMenuOpen(false)}>Instant Mixes</Link></li>
                                    <li><Link to="/collections/oils" onClick={() => setIsMobileMenuOpen(false)}>Wooden Pressed Oils (Flat 10% off)</Link></li>
                                    <li><Link to="/collections/additional" onClick={() => setIsMobileMenuOpen(false)}>Additional products</Link></li>
                                    <li><Link to="/collections/no-oil" onClick={() => setIsMobileMenuOpen(false)}>No oil/ Less oil products</Link></li>
                                    <li><Link to="/collections/immunity" onClick={() => setIsMobileMenuOpen(false)}>Immunity boosters</Link></li>
                                    <li><Link to="/collections/diabetic" onClick={() => setIsMobileMenuOpen(false)}>Diabetic check</Link></li>
                                </ul>
                            </li>
                            <li className={`has-dropdown ${activeDropdown === 'more' ? 'active' : ''}`}>
                                <Link to="#" onClick={(e) => toggleDropdown('more', e)}>More <ChevronDown size={14} /></Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-icons">
                        <Search className="icon" size={22} />
                        {user ? (
                            <div className="user-menu">
                                <span className="user-name">{user.username}</span>
                                <button onClick={handleLogout} className="logout-btn">Logout</button>
                            </div>
                        ) : (
                            <Link to="/login" className="icon-link">
                                <User className="icon" size={22} />
                            </Link>
                        )}
                        <div className="icon-wrapper">
                            <Heart className="icon" size={22} />
                            <span className="icon-badge">0</span>
                        </div>
                        <Link to="/cart" className="icon-wrapper">
                            <ShoppingCart className="icon" size={22} />
                            <span className="icon-badge">{getCartCount()}</span>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
