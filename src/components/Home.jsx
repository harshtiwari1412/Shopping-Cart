import React, { useEffect, useState } from 'react'
import Card from './Card.jsx'
import './Home.css'

function Home() {

    const API_URL="https://fakestoreapi.com/products";
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    async function fetchProducts(){
        setLoading(true);
        try {
            const response=await fetch(API_URL);
            const data=await response.json();
            setAllProducts(data);
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
            setAllProducts([]); 
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchProducts();
    },[]);

  return (
    <div className='home'>
        {
            loading? <h1>Loading...</h1> :
            allProducts.length==0?(<h1> No Products </h1>):
            <div className='products'>
                {
                    allProducts.map((product)=>{
                        return <Card key={product.id} product={product}></Card>
                    })
                }
            </div>
        }
    </div>
  )
}

export default Home