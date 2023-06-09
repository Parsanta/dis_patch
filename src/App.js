import React, { useState, createContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';
import './Service.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ServicePage } from './pages/ServicePage';
import { AboutPage } from './pages/AboutPage';
import { CartPage } from './pages/CartPage';
import { ContactPage } from './pages/ContactPage';
import data from './components/Data';

 
export const CartContext = createContext();

function App() {
  const { GroceryItems, MedicineItems, SnacksItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <CartContext.Provider value={cartItems}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="/service"
              element={
                <ServicePage
                  {...{
                    GroceryItems,
                    MedicineItems,
                    SnacksItems,
                    handleAddToCart,
                  }}
                />
              }
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </CartContext.Provider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
