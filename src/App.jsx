
import './App.css'
import Header from './Component/Header/Header'
import Checkout from './Component/Checkout/Checkout'
import Home from './Component/Home/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {
  
  return (
    <>
    <BrowserRouter>
        <Header />
      <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/checkout" element={<Checkout />} />
      </Routes>
    
    
    </BrowserRouter>
      
    </>
  )
}

export default App
