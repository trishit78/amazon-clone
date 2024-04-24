import React, { useState } from 'react'
import { useEffect } from 'react';
import './allproduct.css'
import axios from 'axios';
import Product from '../Product/Product';
import MoonLoader from "react-spinners/MoonLoader";
function AllProduct() {


    const [data,setData] = useState([])
    const [isLoading, setIsLoading] = useState(true);
    useEffect(()=>{
        const AllProducts = async ()=>{
            try {
                const res = await axios("https://fakestoreapi.com/products");
                // console.log(Math.floor(res.data[0].rating.rate))
                 setData(res.data)
                 setIsLoading(false);
            } catch (error) {
                console.log(error.message)
                setIsLoading(false);
            }
           
        }
        AllProducts();
    },[]);


  return (
    <div>

    {isLoading ? (
       <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
       <MoonLoader color="#36d7b7" />
     </div>

    ):(
          <div className='parent'>
          {
              data.map((item,index)=>(
                  <Product 
                 key={index}
                    id={item.id}
               title={item.title}
               price={item.price}
               rating={Math.floor(item.rating.rate)}
               image={item.image}
                  />
              ))
          }
          </div>
    )}


      
    </div>
  )
}

export default AllProduct
