import { Response } from "express";
import { sign, Secret, SignOptions, } from "jsonwebtoken";
import { userModel } from '../../models/user';
import {estados, estadoModel} from '../../models/estado';
import { roles } from '../../models/rol';
import { config } from "dotenv";
config()
export interface User {
    rol: string,
    nombre: string,
    email: string,
    password: string,
    edad: string,
    discord: string,
    estado: string,
    observaciones: string,
}
export const authenticationController: { secret: Secret | null, signIn: any, signinOpt: SignOptions } = {
    secret: process.env.SECRET || null,
    signinOpt: {},
    signIn(user: any) {
        return this.secret ? sign({ user }, this.secret) : null
    }
}
export const userController = {
    iniciarSesion: async (req: any, res: Response) => {
        const { email, password } = req.body
        const user = await userModel.findOne({ email, password })
        if (user) {
            const token = authenticationController.signIn(user)
            token ? res.status(200).json({ token }) : res.status(404).json({ mensaje: 'token no generado' })
        } else {
            res.status(401).json({ mensaje: 'Credenciales incorrectas' })
        }
    },
    getManny(): {} {
        return {
            "name": "manny"
        }
    },
    registrarse: async (req: any, res: Response) => {
        const data: any = req.body.user
        const rol=roles.find(x=>x.nombre=='user')
        const estado=estados.find(x=>x.nombre=='desactivado')
        const {nombre, email, password}=data
        const user= new userModel({nombre,password,email,rol, estado})
        const response = await user.save()
        res.json({response})
    }

}