import mongoose from "mongoose"; 
import { config } from "dotenv";
config()
export async function connectDB (){
    const URI= process.env.MONGODB_URI || 'mongodb://localhost:27017/SAFA'
    const db=mongoose.connection
    const options:mongoose.ConnectOptions={
        
    }
    db.on('open',_=>{
        console.log('db connected successfully \n')
    });
    db.on('error',error=>{
        console.error('failed to connect with db')
        console.error(error);
    })
    db.on("close",()=>{
        console.log('conexión cerrada');
    })
    const response=await mongoose.connect(URI, options)
    return response
}
export async function disconnectDB() {
    
    const estadoConeccion = mongoose.connection.readyState
    console.log(estadoConeccion);
    if(estadoConeccion==1 || estadoConeccion==2){
        await mongoose.connection.close()
    }
}