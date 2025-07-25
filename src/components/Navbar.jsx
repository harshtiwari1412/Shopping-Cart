import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa';
import './Navbar.css'
import { useSelector } from 'react-redux';

function Navbar() {

    const navigate=useNavigate();

    const cartItems=useSelector((state) => state.cart.cartItems);

    function homeHandler() {
        navigate('/');
    }

    function cartHandler() {
        navigate('/cart');
    }

  return (
    <div className="navbar">
        <div className="content">
            <h2 onClick={homeHandler}>Shopping Cart</h2>
            <div className="buttons">
                <button onClick={homeHandler} className='homeButton'>
                    Home
                </button>
                <button onClick={cartHandler} className="cartlogo">
                    <FaShoppingCart />
                    {cartItems.length>0?<p className="number">{cartItems.length}</p>: ''}
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar