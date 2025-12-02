import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import BestSellers from './pages/BestSellers';
import ComboProducts from './pages/ComboProducts';
import SpicyPowders from './pages/SpicyPowders';
import Pickles from './pages/Pickles';
import Sweets from './pages/Sweets';
import Snacks from './pages/Snacks';
import ProductList from './components/ProductList';
import './styles/index.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collections/best-sellers" element={<BestSellers />} />
                    <Route path="/collections/combo-products" element={<ComboProducts />} />
                    <Route path="/collections/spicy-powders" element={<SpicyPowders />} />
                    <Route path="/collections/pickles" element={<Pickles />} />
                    <Route path="/collections/sweets" element={<Sweets />} />
                    <Route path="/collections/snacks" element={<Snacks />} />
                    <Route path="/collections/summer-specials" element={<ProductList />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
