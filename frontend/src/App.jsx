import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Header from './components/Header';
import Home from './pages/Home';
import BestSellers from './pages/BestSellers';
import ComboProducts from './pages/ComboProducts';
import SpicyPowders from './pages/SpicyPowders';
import Pickles from './pages/Pickles';
import Sweets from './pages/Sweets';
import Snacks from './pages/Snacks';
import SummerSpecials from './pages/SummerSpecials';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/AdminDashboard';
import ProductList from './components/ProductList';
import Cart from './pages/Cart';
import './styles/index.css';

function App() {
    return (
        <CartProvider>
            <Router>
                <div className="App">
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/register" element={<Register />} />
                        <Route path="/admin" element={<AdminDashboard />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/collections/best-sellers" element={<BestSellers />} />
                        <Route path="/collections/combo-products" element={<ComboProducts />} />
                        <Route path="/collections/spicy-powders" element={<SpicyPowders />} />
                        <Route path="/collections/pickles" element={<Pickles />} />
                        <Route path="/collections/sweets" element={<Sweets />} />
                        <Route path="/collections/snacks" element={<Snacks />} />
                        <Route path="/collections/summer-specials" element={<SummerSpecials />} />
                        
                        {/* Category Routes */}
                        <Route path="/collections/all" element={<ProductList />} />
                        <Route path="/collections/instant-mixes" element={<ProductList />} />
                        <Route path="/collections/oils" element={<ProductList />} />
                        <Route path="/collections/additional" element={<ProductList />} />
                        <Route path="/collections/no-oil" element={<ProductList />} />
                        <Route path="/collections/immunity" element={<ProductList />} />
                        <Route path="/collections/diabetic" element={<ProductList />} />
                    </Routes>
                </div>
            </Router>
        </CartProvider>
    );
}

export default App;
