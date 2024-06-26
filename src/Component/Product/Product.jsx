import React from 'react'

import './product.css'
import { useStateValue } from '../../stateProvider'


function Product({id,title,image,price,rating}) {

    const [state,dispatch] = useStateValue();
    const addToBasket = ()=>{
        dispatch({
            type:"ADD_TO_BASKET",
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
    <div className='product'>
        <div className='product_info'>
            <p>{title}</p>
            <p className='product_price'>
                <strong>{price}</strong>
                <small>{" "}rs</small>
            </p>
            <div className='product_rating flex'>
                {
                    Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))
                }
            </div>
        </div>
        <img src={image} alt="" />
            <button onClick={addToBasket}  >Add to basket</button>
    </div>
  )
}

export default Product
