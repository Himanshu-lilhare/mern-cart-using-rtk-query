import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import { productApi } from "./features/products/productApi";
import { rootApi } from "./features/api/rootApi";
import cartSlice from "./features/cart/cartSlice";


export const store=configureStore({
    reducer:{
        [rootApi.reducerPath]:rootApi.reducer,
        product:productSlice,
        cart:cartSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(rootApi.middleware)
})