
import mongoose from "mongoose"

export async function connectDb(){
    try {
    
        const {connection} = await mongoose.connect(process.env.MONGOURL)

        console.log(`server is connect with ${connection.port}`)
    } catch (error) {
        console.log(error)
    }
  
}