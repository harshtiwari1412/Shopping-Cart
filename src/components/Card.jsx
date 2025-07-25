import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../redux/Slices/CartSlice';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Card.css';


function Card({product}) {

    const cartItems = useSelector((state) => state.cart.cartItems);
    const isAdded = cartItems.some((item) => item.id === product.id);

    const dispatch = useDispatch();

    const addHandler = () => {
        dispatch(addItem(product));
        toast.success("Item added to cart");
    };

    const removeHandler = () => {
        dispatch(removeItem(product.id));
        toast.error("Item removed");
    }

    const title= product.title.length > 14 ? 
        product.title.slice(0, 14) + '...' : 
        product.title;

    const description = product.description.trim().split(" ").slice(0, 10).join(" ") + '...';

  return (
    <div className='card'>
        <div className="title">
            <h2>{product.title}</h2>
        </div>
        <div className="description">
            <p>{description}</p>
        </div>
        <div className="image">
            <img src={product.image} alt="" />
        </div>
        <div className="cardfooter">
            <p className="price">${product.price}</p>
            {isAdded ? (
                <button className="remove" onClick={removeHandler}>REMOVE ITEM</button>):
                (<button className="add" onClick={addHandler}>ADD TO CART</button>
            )}
        </div>
    </div>
  )
}

export default Card