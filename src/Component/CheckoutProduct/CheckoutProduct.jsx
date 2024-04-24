import React from 'react' 

import './CheckoutProduct.css'
import { useStateValue } from '../../stateProvider'
function CheckoutProduct({id,image,price,rating,title}) {

    const [{basket},dispatch] = useStateValue();
    
    const removeFromCart = ()=>{
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id:id,
        })
    }
  return (
    <div>
        <div className="checkoutProduct flex">
            <img
            className='checkoutProduct_image'
            src={image} alt="" />
            <div className='checkoutProduct_info'>
                <p className='checkoutProduct_title'>
                    {title}
                </p>
                <p className='checkoutProduct_price'>
                    <strong>
                        {price}
                    </strong>
                    <small>{" "}rs</small>
                </p>
                <div className='checkoutProduct_rating flex'>
                {
                    Array(rating).fill().map((_,i)=>(
                        <p>⭐</p>
                    ))
                }
                </div>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutProduct
