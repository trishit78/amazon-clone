import React, { useState } from 'react' 
import './login.css'
import { Link } from 'react-router-dom'
function Login() {

    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');

    const signIn = (e)=> {
        e.preventDefault();


    }

    const register = (e)=>{
        e.preventDefault();
    }
  return (
    <div className='login'>
        <Link to='/'>
        <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' 
                />

        </Link>
        <div className='login_container'>
            <h1>Sign In</h1>
            <form  className='flex flex-col'>
                <h5>E-mail</h5>
                <input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                className='border border-black'
                type="text" />
                <h5>Password</h5>
                <input 
                value={password}
                onChange={e=>setPassword(e.target.value)}
                 className='border border-black'
                type="password" />
                <button className='login_signInButton'
                type='submit'
                onClick={signIn}
                >Sign In</button>
            </form>
            <p>By signing-in you agree to the AMAZON CLONE Conditions of use & Sale.Please see our Privacy Notice, out Cookies Notice and our Interest-Based Ads Notice.</p>
            <button className='login_registerButton bg-gray-200'
            onClick={register}
            >Create your amazon account</button>
        </div>
    </div>
  )
}

export default Login
