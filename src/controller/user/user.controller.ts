import { Response } from "express";
import {sign, Secret, SignOptions,  } from "jsonwebtoken"; 
import {userModel} from '../../models/user';
import { config } from "dotenv";
config()
export const  userController={
    iniciarSesion:async(req:any,res:Response)=>{
        const {email, password}=req.body
        const user = await userModel.findOne({email, password})
        if (user) {
            const token = authenticationController.signIn(user)
            token ? res.status(200).json({token}) : res.status(404).json({mensaje:'token no generado'})
        } else {
            res.status(401).json({mensaje:'Credenciales incorrectas'})
        }
    },
    getManny():object{
        return {
            "name":"manny"
        }
    }
}
export const authenticationController:{secret:Secret | null,signIn:any, signinOpt:SignOptions}={
    secret: process.env.SECRET || null,
    signinOpt:{},
    signIn(user:any){
        return this.secret ? sign({user},this.secret) : null
    }
}