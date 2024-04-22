import React from 'react' 

import './checkout.css'
import SubTotal from '../SubTotal/SubTotal'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct'
import { useStateValue } from '../../stateProvider'

function Checkout() {
    const [{basket}] = useStateValue();
    //console.log(basket)
  return (
    <div className='checkout'>
      <div className='checkout_left'>
      <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        <div>
            <h2 className='checkout_title font-semibold text-2xl'>
                Your Shopping Basket
            </h2>



{
    basket.map((item)=>(

        <CheckoutProduct
        id={item.id}
        image={item.image}
        title={item.title}
        price={item.price}
        rating={item.rating}
        />
        )
        )
}








        </div>
      </div>
      
      
      <div className='checkout_right'>
            <SubTotal />
      </div>
    </div>
  )
}

export default Checkout
