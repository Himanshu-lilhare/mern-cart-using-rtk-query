
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import SIngleProduct from "./components/SIngleProduct"
import AddProduct from "./components/AddProduct"
import Header from "./components/Header"
import { Cart } from "./components/Cart"


function App() {


  return (
   <BrowserRouter>
   <Header/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/:id' element={<SIngleProduct/>}/>
<Route path='/addProduct' element={<AddProduct/>}/>
<Route path='/cart' element={<Cart/>}/>
  </Routes>

   </BrowserRouter>
  )
}

export default App
