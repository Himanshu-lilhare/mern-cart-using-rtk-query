
import {BrowserRouter, Route, Routes} from "react-router-dom"
import './App.css'
import Home from "./components/Home"
import SIngleProduct from "./components/SIngleProduct"
import AddProduct from "./components/AddProduct"


function App() {


  return (
   <BrowserRouter>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/:id' element={<SIngleProduct/>}/>
<Route path='/addProduct' element={<AddProduct/>}/>
  </Routes>

   </BrowserRouter>
  )
}

export default App
