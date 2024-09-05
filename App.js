import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import Cart from './Components/Cart';
import LandingPage from './Components/LandingPage'; // Import the LandingPage component
import { CartProvider } from './context/CartContext';



function App() {
  return (
  <>

    <CartProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LandingPage />} /> {/* Landing page route */}
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </CartProvider>
    
  </>
    
   
  );
}

export default App;
