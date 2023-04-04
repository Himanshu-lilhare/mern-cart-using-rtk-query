import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {

  const {cartItems,cartTotal}=useSelector(state=>state.cart)
  return (
    <div style={{border:'1px solid black'}}>
        <Link to={'/'}>
        <button>Home</button>
        </Link>
       <Link to={'/cart'}><button>Cart({cartItems.length})</button>
       <button>
        Total  
       {
      cartTotal
    }
       </button>
      </Link> 
    </div>
  )
}

export default Header