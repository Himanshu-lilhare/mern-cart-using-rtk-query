import { productModel } from "../model/product.js";

export const getAllProducs = async (req, res) => {
  try {
    const allProducts = await productModel.find({});
    res.json(allProducts);
  } catch (error) {
    console.log(error);
  }
};

export const getProductById=async(req,res)=>{

const id=req.params.id
console.log(id)
if(!id) return res.status(400).send("you doesnt provide any Id")
try {
   
const product=await productModel.findById(id)
res.json(product)

} catch (error) {
console.log(error)
}

}


export const createProduct=async(req,res)=>{
    console.log(req.body)
    const {image,title,price,category,description}=req.body
     
    try {
       
    const createdProduct=await productModel.create({
        image,title,price,category,description
    })
    res.send(createdProduct)
    
    } catch (error) {
    console.log(error)
    }
    
    }