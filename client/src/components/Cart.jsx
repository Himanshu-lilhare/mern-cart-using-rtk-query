import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'

export const Cart = () => {

  const {cartItems,cartTotal}=useSelector(state=>state.cart)
  const dispatch=useDispatch()
  function clearAllCart(){
  dispatch(clearCart())
  }
  return (
    <div>
      <ul>
        {
          cartItems?.map((item,index)=>{
return <li key={index}>
  {
    item.product.title
    
  }
  <button>
    {
      item.qty
    }
  </button>
  <button>
    {
      cartTotal ? cartTotal : 0
    }
  </button>
</li>
          })
        }
      </ul>

      <div>
        <button onClick={()=>clearAllCart()}>Clear All Cart</button>
      </div>
    </div>
  )
}
