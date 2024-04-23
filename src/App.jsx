
import './App.css'
import Header from './Component/Header/Header'
import Checkout from './Component/Checkout/Checkout'
import Home from './Component/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Component/Login/Login'


function App() {
  function HeaderAndHome() {
    return (
      <>
        <Header />
        <Home />
      </>
    );
  }
  function CheckoutAndHome() {
    return (
      <>
        <Header />
        <Checkout />
      </>
    );
  }
  return (
    <>
    <BrowserRouter>
        
      <Routes>
            <Route path="/" element={<HeaderAndHome />}    />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={<CheckoutAndHome />} />
      </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
