import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="container mt-5">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="list-group">
          {cart.map((item, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover', marginRight: '10px' }} />
              {item.name} - ${item.price}
              <button className="btn btn-danger btn-sm" onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <Link to="/home" className="btn btn-secondary mt-3">Back to Products</Link>
    </div>
  );
}

export default Cart;
