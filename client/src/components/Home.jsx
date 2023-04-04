import React from 'react'
import { useFetchAllProductsQuery } from '../features/products/productApi'
import {Link} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart/cartSlice'
const Home = () => {

    const {data,isLoading} = useFetchAllProductsQuery() 
     
    const dispatch=useDispatch()

    function addToCartHandler(product){
    
dispatch(addToCart({product,qty:1}))
   

    }
  return (
<>
 {
 data && data.map((ele)=>{
    return <ul key={ele._id}>
  
    <li>{ele.title} <button onClick={()=>addToCartHandler(ele)}>Add to cart</button>
    <Link to={`/${ele._id}`}> <button>view</button></Link>
    </li>
   </ul> 
 }) 
 
 
 } 
 {
    isLoading && <h1>...loading</h1>
 }
</>
  )
}

export default Home