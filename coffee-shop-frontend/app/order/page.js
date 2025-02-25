'use client';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';

export default function OrderPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    coffeeType: 'espresso',
    quantity: 1,
    notes: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your order! We will contact you shortly.');
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      phone: '',
      coffeeType: 'espresso',
      quantity: 1,
      notes: ''
    });
  };

  return (
    <main>
      <Navbar />
      <div className="page-container">
        <h1 className="page-title">Place Your Order</h1>
        <div className="order-content">
          <form onSubmit={handleSubmit} className="order-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange} 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="coffeeType">Coffee Type</label>
              <select 
                id="coffeeType" 
                name="coffeeType" 
                value={formData.coffeeType} 
                onChange={handleChange} 
                className="form-input"
              >
                <option value="espresso">Espresso</option>
                <option value="cappuccino">Cappuccino</option>
                <option value="latte">Latte</option>
                <option value="mocha">Mocha</option>
              </select>
            </div>
            
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <input 
                type="number" 
                id="quantity" 
                name="quantity" 
                value={formData.quantity} 
                onChange={handleChange} 
                min="1" 
                className="form-input" 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="notes">Special Instructions</label>
              <textarea 
                id="notes" 
                name="notes" 
                value={formData.notes} 
                onChange={handleChange} 
                className="form-input"
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Place Order</button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
}