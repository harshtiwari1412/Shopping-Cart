import React from 'react'
import { useNavigate } from 'react-router-dom';

function EmptyCart() {

    const navigate = useNavigate();
    function homeHandler() {
        navigate('/');
    }
    
  return (
    <div>
        <h1>Your Cart is Empty</h1>
        <button onClick={homeHandler}>Shop Now</button>
    </div>
  )
}

export default EmptyCart