import React from 'react'
import { useParams } from 'react-router-dom'
import { useAddProductByIdQuery } from '../features/products/productApi'

const SIngleProduct = () => {

    const params=useParams()
     
   const {data}=useAddProductByIdQuery(params.id)
   console.log(data)
  return (
    <div>
       {
      data && <ul>
     <li>{data?.category}</li>
     <li>{data.price}</li>
     <li>{data.title}</li>
     
       </ul>
       }

    </div>
  )
}

export default SIngleProduct