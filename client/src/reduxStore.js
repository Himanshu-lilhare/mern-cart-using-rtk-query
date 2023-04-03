import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import productSlice from "./features/products/productSlice";
import { productApi } from "./features/products/productApi";
import { rootApi } from "./features/api/rootApi";


export const store=configureStore({
    reducer:{
        [rootApi.reducerPath]:rootApi.reducer,
        product:productSlice
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(rootApi.middleware)
})