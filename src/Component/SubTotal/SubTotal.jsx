import React from 'react'

import './subTotal.css'
function SubTotal() {
  return (
    <div className='subtotal'>
        <p className='ml-2'>Subtotal(0 items)
            <strong>0</strong>
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
