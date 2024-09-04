import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import App from './App';
import { ToastContainer } from 'react-toastify'; // Import ToastContainer

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ToastContainer /> {/* Add ToastContainer here */}
  </React.StrictMode>,
  document.getElementById('root')
);
