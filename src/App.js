import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import "./Service.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { ServicePage } from "./pages/ServicePage";
import { AboutPage } from "./pages/AboutPage";
import { CartPage } from "./pages/CartPage";
import { ContactPage } from "./pages/ContactPage";
import data from "./components/Data";
import { useState } from "react";

function App() {
  const { GroceryItems, MedicineItems, SnacksItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (item) => {
    setCartItems([...cartItems, item]);
  };
  return (
    <Router>
      <div className="App">
        <NavBar />
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
          <Route path="/cart" element={<CartPage cartItems={cartItems}/>} />
          <Route path="/contact" element={<ContactPage/>}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
