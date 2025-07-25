import React from 'react'
import { useSelector } from 'react-redux';
import EmptyCart from './EmptyCart.jsx'
import NonEmptycart from './NonEmptyCart.jsx'
import './Cart.css';

function Cart() {

  const cartItems=useSelector((state) => state.cart.cartItems);

  return (
    <div className='cart'>
      {cartItems.length > 0 ?(<NonEmptycart/>):(<EmptyCart/>) }
    </div>
  )
}

export default Cart