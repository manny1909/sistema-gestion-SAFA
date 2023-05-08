import {verify} from 'jsonwebtoken';
import { config } from "dotenv";
import { Response } from 'express';
import {rolModel} from '../models/rol';
import { miembroModel } from '../models/miembro';
config()
function isAuthenticate(req:any){
    const token= req.headers.athorization || null
    const secret= process.env.SECRET || null
    if (token && secret ){
       const payload = verify(token, secret)
       
       return payload?payload:null
    } 
}
async function validarAccesoPorRol(usuario:any, rol:string){
    const miembro = await miembroModel.exists(
        {'usuario':usuario._id}
        ).populate(
            {
                select:'',
                path: 'rol',
                match: {nombre: rol}
            }
        ).select('rol usuario _id')

    return miembro !=undefined
}
export const auth={
    async admin(req:any,res:Response,next:any){
        const payload:any=isAuthenticate(req) || null
        if (payload && payload.user) {
            const user = payload.user            
            req.user=user
            const esAdmin = await validarAccesoPorRol(user, 'admin')
            esAdmin
            ? next()
            : res.status(401).json({mensaje:'unauthorized'})
        } else {
            res.status(401).json({mensaje:'unathenticate'})
        }
    },

}