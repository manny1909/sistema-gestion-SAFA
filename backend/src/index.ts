import app from './app';
import dotenv from 'dotenv';
import { connectDB } from './db';
dotenv.config()

const listen:any= app.get('listen')
const main=()=>{
    connectDB().then(()=>{
        listen();

    }).catch(((reason:any)=>{
        console.log('Error al conectar con la base base de datos');
        console.error(reason);
    }))

}
main()