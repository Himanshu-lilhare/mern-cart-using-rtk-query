import { rootApi } from "../api/rootApi";


export const productApi=rootApi.injectEndpoints({
    endpoints:(builder)=>({
        fetchAllProducts:builder.query({
            query:()=>'/getProducts',
            providesTags:['Product']
        }),

        addProduct:builder.mutation({
query:(data)=>({
    method:'POST',
    url:'/createProduct',
    body:data,
 
}),
invalidatesTags: ['Product']
        }),
        addProductById:builder.query({
            query:(id)=>`/getProduct/${id}`
        })
    })

})

export const {useFetchAllProductsQuery,useAddProductMutation,useAddProductByIdQuery} = productApi
