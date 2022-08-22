import mongoose from "mongoose"; 
import { config } from "dotenv";
import { estadoModel } from "../models/estado";
config()
export async function connectDB (){
    const URI= process.env.MONGODB_URI || 'mongodb://localhost:27017/SAFA'
    const db=mongoose.connection
    const options:mongoose.ConnectOptions={
        
    }
    const response=await mongoose.connect(URI, options)
    db.on('open',_=>{
        console.log('db connected successfully \n')
    });
    db.on('error',error=>{
        console.error('failed to connect with db')
        console.error(error);
    })
}
export async function disconnectDB() {
    await mongoose.disconnect()
}