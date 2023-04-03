import { rootApi } from "../api/rootApi";


export const productApi=rootApi.injectEndpoints({
    endpoints:(builder)=>({
        fetchAllProducts:builder.query({
            query:()=>'/getProducts'
        }),

        addProduct:builder.mutation({
query:(data)=>({
    method:'POST',
    url:'/createProduct',
    body:data
})
        })
    })

})

export const {useFetchAllProductsQuery,useAddProductMutation} = productApi
