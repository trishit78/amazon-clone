import React from 'react' 

import './payment.css'
import { useStateValue } from '../../stateProvider'
import CheckoutProduct from '../CheckoutProduct/CheckoutProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Payment() {


    const [{basket}] = useStateValue();

    //console.log(basket)
    let total =0;
    for(let i =0;i<basket.length;i++){
        total+=basket[i].price;
    }

   
  const checkoutHandler = async (id) => {
    const res = await axios.get("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("You are offline! Failed to load...");
    }

    var options = {
      key: "rzp_test_1sh4xAWBK0C6e5", // Enter the Key ID generated from the Dashboard
      amount: total* 100,
      currency: "INR",
      name: "Amazon",
      description: "Thank you so much for helping",
      image: "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
      prefill: {
        email: "trishit456@gmail.com",
        contact: +919477704221,
      },

      handler: function (response) {
        
        //console.log(response);
        setAmt(null);
       
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

    
   

    return (
    <div className='payment'>
        <div className='payment_container'>
            <h1 className='text-2xl'>
                <Link to='/checkout'>
                Checkout ({basket?.length} Items)
                </Link>
            </h1>
            <div className='payment_section'>
                <div className='payment_title'>
                    <h3 className='font-bold'>Delivery Address</h3>

                </div>
                <div className='payment_address'>
                    <p>abc@gmail.com</p>
                    <p>123 anc lane</p>
                    <p>Los Angles,CA</p>
                </div>
            </div>

            <div className='payment_section'>
                <div className="payment_title">
                    <h3 className='font-bold'>Review items and delivery</h3>
                </div>
                <div className='payment_items'>
                    {
                        basket.map(item=>(
                            <CheckoutProduct 
                            id={item.id}
                            image={item.image}
                            title={item.title}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))
                    }
                </div>
            </div>

            <div className='payment_section'>
            <div className="payment_title">
                    <h3 className='font-bold'>Payment Method</h3>
                </div>
                <div className='payment_razorpay '>
                    <div className='border border-black px-8 py-4'>
                        <div className='flex items-center space-x-3'>

                        <h1 className='text-xl font-bold'>Order Total</h1>
                        <h1 className='text-xl font-bold'>{total} rs</h1>
                        </div>
                        <button 
                        onClick={checkoutHandler}
                        className='mt-8  w-full razorpay_button'>Buy Now</button>
                    </div>
                </div>
            </div>




        </div>
    </div>
  )
}

export default Payment
