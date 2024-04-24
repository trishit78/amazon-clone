import React from 'react'

import './subTotal.css'
import { useStateValue } from '../../stateProvider'
import { subtotal } from '../../reducer'

import { Link } from 'react-router-dom'

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
        <div className='flex items-center'>

        <p className='mr-2'>Subtotal({basket.length} items)
        </p>
            <strong >{total} rs</strong>
        </div>
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
  <div className='w-full flex justify-center mt-2 mb-2 checkout-btn'>
        <Link to='/payment'>
    <button>Proceed To Checkout</button>
</Link>
  </div>

    </div>
  )
}

export default SubTotal
