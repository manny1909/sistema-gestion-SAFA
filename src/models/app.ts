import express,{Application, Router} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { indexRouter, } from '../routes/index.routes';
//initalization
const app:Application=express();
const apiPaths:any={
    usuarios: '/api'
}
//setings
//middlewares
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//static files
app.use(express.static('public'))
//routes
app.use(apiPaths.usuarios,indexRouter)
//starting server
app.set('listen',()=>{
    const port:string=process.env.PORT || '3000'
    app.set('port',port)
    app.listen(port,()=>{
        console.log('server on port '+port);
        
    })
})
export default app;

