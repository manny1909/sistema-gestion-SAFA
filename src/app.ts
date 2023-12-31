import express,{Application, Router} from 'express';
import cors from 'cors';
import morgan from 'morgan';
import './utils/auth/index'
import routeApi from './routes/index.routes'
import setupModels from './setupModels';
//initialization
const app:Application=express();
//settings
setupModels()
//middlewares 
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//static files
app.use(express.static('public'))
//routes
routeApi(app)
//starting server
app.set('listen',()=>{
    const port:string=process.env.PORT || '3000'
    app.set('port',port)
    app.listen(port,()=>{
        console.log('server on port '+port);
        
    })
})
export default app;

