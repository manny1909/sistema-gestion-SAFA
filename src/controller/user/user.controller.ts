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
            await user.updateOne({sesion:true})
            const rolesUser = await miembroModel.find(
                    {usuario:user._id}
                ).populate(
                    {
                        path: 'rol',
                        select:'nombre',
                    }
                ).populate(
                    {
                        path:'usuario',
                        select:'nombre',
                    }
                )
            token ? res.status(200).json({ token, rolesUser }) : res.status(404).json({ mensaje: 'token no generado' })
        } else {
            res.status(401).json({ mensaje: 'Credenciales incorrectas' })
        }
    },
    logout:async (req:any, res:Response) => {
        try {
            const _id = req.body._id
            await userModel.findByIdAndUpdate(_id, {token:false})
            res.status(200).json(true)  
            
        } catch (error) {
            res.status(400).json(false)
        }
    },
    getManny(): {} {
        return {
            "name": "manny"
        }
    },
    getUsers: async (req:any, res:Response)=>{
        let a = await
        userModel.aggregate([{
            $lookup: {
                from:'miembros',
                localField:'_id',
                foreignField:'usuario',
                as: 'roles'
            },
            
        }])
        
        let resultados:any = await userModel.find().populate({
            path:'estado',
            select: 'nombre -_id',
        })
        let response:any[]=new Array()
        await Promise.all(resultados.map(async (resultado:any)=>{
            resultado.roles = []
            const roles = await miembroModel.find({'usuario': resultado._id}).populate({
                select:'nombre',
                path:'rol',
                
            })
           response.push({user:resultado, roles}) 
        }))
        res.json(response)
    },
    registrarse: async (req: any, res: Response) => {
        try {
            const data: any = req.body.user
            const rol=await rolModel.findOne({nombre:"user"}).select("_id")
            const estado=await estadoModel.findOne({nombre:"desactivado"}).select("_id")
            const {nombre, email, password}=data
            const usuario= new userModel({nombre,password,email, estado})
            const userDB = await usuario.save()
            const miembroDB = await miembroModel.findOneAndUpdate({}, {rol:rol._id, usuario:userDB._id}, {upsert:true})
            res.json({userDB, miembroDB, ok:true})
            
        } catch (error) {
            res.status(400).json({error})
        }
    },
    getUserByToken:async (req:any, res:any) => {
        const data: any = req.body.token
        
        const secret = process.env.SECRET || null
        if (data && secret) {
            const user:any = verify(data, secret)
            const rolesUser = await miembroModel.find(
                {usuario:user._id}
            ).populate(
                {
                    path: 'rol',
                    select:'nombre',
                }
            )
            return res.json(
                {user, rolesUser}
                )
        }
        else{
            return res.json()
        }
    }

}