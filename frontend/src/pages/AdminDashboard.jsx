import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/AdminDashboard.css';

const AdminDashboard = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('product'); // 'product' or 'user'
    
    // Product Form State
    const [productName, setProductName] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [productImage, setProductImage] = useState('');
    const [productCategory, setProductCategory] = useState('Pickles');
    const [productStock, setProductStock] = useState('50');
    const [productFeatured, setProductFeatured] = useState(false);
    const [productBestSeller, setProductBestSeller] = useState(false);

    // User Form State
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('USER');

    const [message, setMessage] = useState('');

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (!user || user.role !== 'ADMIN') {
            navigate('/login');
        }
    }, [navigate]);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/products', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: productName,
                    description: productDescription,
                    price: parseFloat(productPrice),
                    imageUrl: productImage,
                    category: productCategory,
                    stock: parseInt(productStock),
                    featured: productFeatured,
                    bestSeller: productBestSeller
                }),
            });
            if (response.ok) {
                setMessage('Product added successfully!');
                setProductName('');
                setProductDescription('');
                setProductPrice('');
                setProductImage('');
                setProductStock('50');
                setProductFeatured(false);
                setProductBestSeller(false);
            } else {
                setMessage('Failed to add product.');
            }
        } catch (error) {
            setMessage('Backend error: ' + error.message);
        }
    };

    const handleAddUser = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/api/users/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password, role }),
            });
            if (response.ok) {
                setMessage('User added successfully!');
                setUsername('');
                setPassword('');
            } else {
                const msg = await response.text();
                setMessage('Failed to add user: ' + msg);
            }
        } catch (error) {
            // Fallback for Demo Mode
            setMessage('Backend not connected. User addition simulated.');
            setUsername('');
            setPassword('');
        }
    };

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/login');
    };

    return (
        <div className="admin-dashboard">
            <div className="admin-sidebar">
                <h2>Admin Panel</h2>
                <ul>
                    <li className={activeTab === 'product' ? 'active' : ''} onClick={() => setActiveTab('product')}>Add Product</li>
                    <li className={activeTab === 'user' ? 'active' : ''} onClick={() => setActiveTab('user')}>Add User</li>
                    <li onClick={handleLogout} className="logout-btn">Logout</li>
                </ul>
            </div>
            <div className="admin-content">
                <h1>Dashboard</h1>
                {message && <div className="message-box">{message}</div>}

                {activeTab === 'product' && (
                    <div className="form-container">
                        <h2>Add New Product</h2>
                        <form onSubmit={handleAddProduct}>
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" value={productName} onChange={e => setProductName(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea value={productDescription} onChange={e => setProductDescription(e.target.value)} rows="3" />
                            </div>
                            <div className="form-group">
                                <label>Price (Rs.)</label>
                                <input type="number" step="0.01" value={productPrice} onChange={e => setProductPrice(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input type="text" value={productImage} onChange={e => setProductImage(e.target.value)} required placeholder="https://..." />
                            </div>
                            <div className="form-group">
                                <label>Category</label>
                                <select value={productCategory} onChange={e => setProductCategory(e.target.value)}>
                                    <option value="Pickles">Pickles</option>
                                    <option value="Sweets">Sweets</option>
                                    <option value="Snacks">Snacks</option>
                                    <option value="Spicy Powders">Spicy Powders</option>
                                    <option value="Instant Mixes">Instant Mixes</option>
                                    <option value="Oils">Oils</option>
                                    <option value="Summer Specials">Summer Specials</option>
                                    <option value="Immunity">Immunity Boosters</option>
                                    <option value="Diabetic">Diabetic Products</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Stock Quantity</label>
                                <input type="number" value={productStock} onChange={e => setProductStock(e.target.value)} required />
                            </div>
                            <div className="form-group checkbox-group">
                                <label>
                                    <input type="checkbox" checked={productFeatured} onChange={e => setProductFeatured(e.target.checked)} />
                                    Featured Product
                                </label>
                                <label>
                                    <input type="checkbox" checked={productBestSeller} onChange={e => setProductBestSeller(e.target.checked)} />
                                    Best Seller
                                </label>
                            </div>
                            <button type="submit" className="btn-submit">Add Product</button>
                        </form>
                    </div>
                )}

                {activeTab === 'user' && (
                    <div className="form-container">
                        <h2>Add New User</h2>
                        <form onSubmit={handleAddUser}>
                            <div className="form-group">
                                <label>Username</label>
                                <input type="text" value={username} onChange={e => setUsername(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label>Role</label>
                                <select value={role} onChange={e => setRole(e.target.value)}>
                                    <option value="USER">User</option>
                                    <option value="ADMIN">Admin</option>
                                </select>
                            </div>
                            <button type="submit" className="btn-submit">Add User</button>
                        </form>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminDashboard;
