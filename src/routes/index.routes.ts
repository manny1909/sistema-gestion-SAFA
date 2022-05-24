import { Router } from "express";
import userRoutes from './users/index.user';

const indexRouter:Router=Router()
indexRouter.use('/users',userRoutes) 
 indexRouter.route('/')
    .get((req,res)=>{
         res.json({
            "hola":"puto"
        })
    })
export {
    indexRouter,
    userRoutes
}