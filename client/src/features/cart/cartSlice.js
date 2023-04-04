import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')) : [],
  cartTotal: 0  ,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      // if item exist

      let existItemIndex = state.cartItems.findIndex((ele) => {
        return ele.product._id === action.payload.product._id;
      });

      if (existItemIndex >= 0) {
        if (action.payload.qty > 1) {
          state.cartItems[existItemIndex].qty += action.payload.qty;
         
        } else {
          state.cartItems[existItemIndex].qty += 1;
      
        }
      } else {
        let itemToBeInsert = action.payload;
        state.cartItems.push(itemToBeInsert);
 
      }

      state.cartTotal=state.cartTotal + (action.payload.product.price * action.payload.qty)
      localStorage.setItem('cartTotal',JSON.stringify(state.cartTotal))
      console.log(state.cartTotal)
      localStorage.setItem("cartItems",JSON.stringify(state.cartItems));
    },
    removeItemFromCart: (state, action) => {},
    clearCart: (state) => {
      localStorage.clear()
      state.cartItems=[]
      state.cartTotal=0
    },
    increaseQtyFromCart: (state, action) => {},
    decreaseQtyFromCart: (state, action) => {},
  },
});

export const {
  addToCart,
  removeItemFromCart,
  increaseQtyFromCart,
  decreaseQtyFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
