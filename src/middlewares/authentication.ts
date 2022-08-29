import {verify} from 'jsonwebtoken';
import { config } from "dotenv";
import { Response } from 'express';
import {rolModel} from '../models/rol';
config()
function isAuthenticate(req:any){
    const token= req.headers.athorization || null
    const secret= process.env.SECRET || null
    if (token && secret ){
       const payload = verify(token, secret)
       
       return payload?payload:null
    } 
}
let adminDBID:any=null
rolModel.findOne({nombre:'admin'},'_id').then(({_id})=>adminDBID=_id.valueOf())
export const auth={
    
    admin(req:any,res:Response,next:any){
        const payload:any=isAuthenticate(req) || null
        if (payload && payload.user) {
            const user = payload.user            
            req.user=user
            user.rol==adminDBID?next(): res.status(401).json({mensaje:'unauthorized'})
        } else {
            res.status(401).json({mensaje:'unathenticate'})
        }
    },

}