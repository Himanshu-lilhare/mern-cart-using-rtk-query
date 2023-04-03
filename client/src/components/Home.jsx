import React from 'react'
import { useFetchAllProductsQuery } from '../features/products/productApi'
import {Link} from 'react-router-dom'
const Home = () => {

    const {data,isLoading} = useFetchAllProductsQuery() 

    console.log(data)
    function addToCartHandler(e){
      console.log('aaya')
      e.stopPropagation()
    }
  return (
<>
 {
 data && data.map((ele)=>{
    return <ul key={ele._id}>
  
    <li>{ele.title} <button onClick={addToCartHandler}>Add to cart</button>
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