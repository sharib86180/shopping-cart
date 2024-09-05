import React from 'react';
import { Link } from 'react-router-dom';
import vid from '../assets/vid.mp4'

function LandingPage() {
  return (
   <>
    
    
     <div className="bgContainer">
     <div className="overlay">
         <video src={vid} autoPlay loop muted />
         </div>
         <div className="Container">
      <h1>Welcome to Our Shopping Cart</h1>
      <p>Your one-stop shop for amazing products.</p>
      <Link to="/home" className="btn btn-primary">Enter Store</Link>
      </div>
 </div>
   </>
  );
}

export default LandingPage;
