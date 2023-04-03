import express from "express"
import { createProduct, getAllProducs, getProductById } from "../controllers/product.js"

const productRouter=express.Router()

productRouter.route('/getProducts').get(getAllProducs)
productRouter.route('/getProduct/:id').get(getProductById)
productRouter.route('/createProduct').post(createProduct)

export default productRouter