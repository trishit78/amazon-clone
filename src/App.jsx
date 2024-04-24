
import './App.css'
import Header from './Component/Header/Header'
import Checkout from './Component/Checkout/Checkout'
import Home from './Component/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './Component/Login/Login'
import Payment from './Component/Payment/Payment'
import AllProduct from './Component/All Product/AllProduct'
function App() {
  function PaymentAndHome() {
    return (
      <>
        <Header />
        <Payment />
      </>
    );
  }
  function AllProductAndHome() {
    return (
      <>
        <Header />
        <AllProduct />
      </>
    );
  }
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
            <Route path="/payment" element={<PaymentAndHome />} />
            <Route path="/allproduct" element={<AllProductAndHome />} />
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
