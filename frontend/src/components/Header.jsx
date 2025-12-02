import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart, Menu, X, ChevronDown } from 'lucide-react';
import '../styles/Header.css';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                                    <span className="brand-name">Ramadevi</span>
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
                            <li className="has-dropdown">
                                <Link to="#">Category <ChevronDown size={14} /></Link>
                            </li>
                            <li className="has-dropdown">
                                <Link to="#">More <ChevronDown size={14} /></Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="header-icons">
                        <Search className="icon" size={22} />
                        <User className="icon" size={22} />
                        <div className="icon-wrapper">
                            <Heart className="icon" size={22} />
                            <span className="icon-badge">0</span>
                        </div>
                        <div className="icon-wrapper">
                            <ShoppingCart className="icon" size={22} />
                            <span className="icon-badge">0</span>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
