import { Response } from "express";
import { sign, Secret, SignOptions, verify } from "jsonwebtoken";
import { userModel } from '../../models/user';
import {estadoModel} from '../../models/estado';
import { rolModel } from '../../models/rol';
import { config } from "dotenv";
import { miembroModel } from "../../models/miembro";
config()

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
        const rol=await rolModel.findOne({nombre:"user"}).select("_id")
        const estado=await estadoModel.findOne({nombre:"desactivado"}).select("_id")
        const {nombre, email, password}=data
        const usuario= new userModel({nombre,password,email, estado})
        const userDB = await usuario.save()
        const miebroDB = await new miembroModel({rol:rol._id, usuario: userDB._id}).save()
        res.json({userDB, miebroDB})
    },
    getUserByToken:async (req:any, res:any) => {
        const data: any = req.body.token
        
        const secret = process.env.SECRET || null
        if (data && secret) {
            const user:any = verify(data, secret)
            const miembros = await miembroModel.find({'usuario.$id':user._id}).select('rol')
            
            const roles = await Promise.all(
                miembros.map(async (rol) => {
                    return await rolModel.findOne({$_id:rol})
                })
            ) 
            return res.json(
                {user, roles, miembros}
                )
        }
        else{
            return res.json()
        }
    }

}