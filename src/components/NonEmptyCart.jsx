import React from 'react'
import { useSelector } from 'react-redux';
import CartItem from './CartItem.jsx'
import { useDispatch } from 'react-redux';
import { clearCart } from '../redux/Slices/CartSlice';
import './NonEmptyCart.css';

function NonEmptyCart() {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const dispatch = useDispatch();

    const checkOutHandler = () => {
        dispatch(clearCart());
    }

  return (
    <div className="nonEmptyCart">
        <div className="cartItems">
            {cartItems.map((item) => (
                <CartItem key={item.id} product={item}/>
            ))}
        </div>
        <div className="cartDetails">
            <div>
            <div className="header">
            <h2>YOUR CART</h2>
            <h1>SUMMARY</h1>
            </div>
            <div className="cartTotal">
            <h2>Total Items:{cartItems.length}</h2>
            </div>
            </div>
            <div className="cartTotalPrice">
                <h2>Total Price: 
                    ${cartItems.reduce((total, item) => total + item.price, 0).toFixed(2)}
                </h2>
                <button className="checkOut" onClick={checkOutHandler}>Checkout Now</button>
            </div>
        </div>
    </div>
  );
}

export default NonEmptyCart