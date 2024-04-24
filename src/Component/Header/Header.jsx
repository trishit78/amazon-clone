import React from 'react' 

import './header.css'
import { FaSearch } from "react-icons/fa";
import { FaCartArrowDown } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { useStateValue } from '../../stateProvider';
function Header() {
    const [{basket}] = useStateValue()
    //console.log(basket)
  return (
    <>
    <div className='header  pr-4'>
        <Link to="/">
      <img 
      className='header_logo'
      src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
      </Link>
    
    <div className="header_search ">
    <input 
    className='header_searchIn'
    type="text" />
<FaSearch  
size={"50"}
className='header_searchIcon '
/>

    </div>
    <div className='header_nav flex items-center'>
    <Link to='/allproduct'>
    <div className='header_option'>
            <span className='header_optionLineOne'>
                All 
            </span>
            <span className='header_optionLineTwo'>
                Product
            </span>
        </div> 
    </Link>
      
      <Link to={'/login'}>
       <div className='header_option'>
            <span className='header_optionLineOne'>
                Hello Guest
            </span>
            <span className='header_optionLineTwo'>
                Sign In
            </span>
        </div> 
      </Link>
       <div className='header_option'>
       <span className='header_optionLineOne'>
                Returns
            </span>
            <span className='header_optionLineTwo'>
                & Orders
            </span>
        </div> 
       <div className='header_option'>
       <span className='header_optionLineOne'>
                Your
            </span>
            <span className='header_optionLineTwo'>
                Prime
            </span>
        </div>
        <div className='flex items-center space-x-3'>
            <Link to="/checkout">
            <FaCartArrowDown 
            size={25}
            className='header_cart' />
            </Link>
            <span className='header_optionLineTwo header_basket'>{basket.length}</span>
        </div> 
    </div>
    </div>
    </>
  )
}

export default Header
