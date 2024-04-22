import React from 'react'

import './subTotal.css'
import { useStateValue } from '../../stateProvider'
import { subtotal } from '../../reducer'

function SubTotal() {
        const [{basket}] = useStateValue()
        //console.log(basket)
        let total =0;
        for(let i =0;i<basket.length;i++){
            total+=basket[i].price;
        }
        //console.log(total)
  return (
    <div className='subtotal '>
        <p className='ml-2'>Subtotal({basket.length} items)
            <strong>${total}</strong>
        </p>
        <div className='subtotal_gift '>
            <div>
                
            <input type="checkbox" />
            </div>
            <div>

                <h1>

                This order contains a gift    
                </h1>
            </div>
        </div>

        <div className='w-full flex justify-center mt-2 mb-2 checkout-btn '>
            <button >Proceed To Checkout</button>
        </div>
    </div>
  )
}

export default SubTotal
