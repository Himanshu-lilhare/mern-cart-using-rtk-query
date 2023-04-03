import React, { useState } from 'react'
import { useAddProductMutation } from '../features/products/productApi'
import { useNavigate } from 'react-router-dom'

const AddProduct = () => {

const [addProduct]=useAddProductMutation()

 const [title,settitle]=useState('')
 const [price,setprice]=useState('')
 const [category,setcategory]=useState('')
 const [image,setimage]=useState('')
const navigate=useNavigate()
    function addProductHandler(e){
        e.preventDefault()
        addProduct({
            title,category,image,price
        })

//   navigate('/')

    }
  return (
    <div>
        <form action='' onSubmit={addProductHandler}>
<input type="text" placeholder='title' onChange={(e)=>settitle(e.target.value)}/>
<input type="text" placeholder='price' onChange={(e)=>setprice(e.target.value)} />
<input type="text" placeholder='category' onChange={(e)=>setcategory(e.target.value)}/>
<input type="text"  placeholder='image'onChange={(e)=>setimage(e.target.value)}/>
<button type='submit'>Submit</button>
</form>
    </div>
  )
}

export default AddProduct