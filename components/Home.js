import React from 'react';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';


const products = [
  { id: 1, name: 'Product 1', price: 1000 },
  { id: 2, name: 'Product 2', price: 3500 },
  { id: 3, name: 'Product 3', price: 3000 },
];

function Home() {
  const { addToCart } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <>
     <div className="container mt-5 bg-secondary bg-gradient ">
      <h1 className='text-center text-info font-monospace'>Products</h1>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card shadow-lg p-3 mb-5 bg-body-tertiary rounded">
  
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/cart" className="btn btn-secondary mt-3 bg-dark bg-gradient">Go to Cart</Link>
    </div>
    
    
    </>
  );
}

export default Home;

