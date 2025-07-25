import React from 'react'
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/Slices/CartSlice';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './CartItem.css';


function CartItem({ product }) {

    const dispatch = useDispatch();

    function removeHandler() {
        dispatch(removeItem(product.id));
        toast.error("Item removed")
    }

  return (
    <div className="cartItem">
        <div className="cartImage">
            <img src={product.image} alt={product.name} />
        </div>
        <div className="cartItemDetails">
            <h2 className='title'>{product.title}</h2>
            <p className='description'>{product.description.split(" ").slice(0,15).join(" ")+"..."}</p>
            <div className="cartItemFooter">
                <div className="cartItemPrice">${product.price}</div>
                <button onClick={removeHandler}><RiDeleteBin6Line></RiDeleteBin6Line></button>
            </div>
        </div>
    </div>
  )
}

export default CartItem