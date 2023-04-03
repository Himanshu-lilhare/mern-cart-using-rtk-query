import React from 'react'
import { useFetchAllProductsQuery } from '../features/products/productApi'

const Home = () => {

    const {data,isLoading} = useFetchAllProductsQuery() 

    console.log(data)
  return (
<>
 {
 data && data.map((ele)=>{
    return <ul key={ele._id}>
    <li>{ele.title} <button>Add to cart</button></li>
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