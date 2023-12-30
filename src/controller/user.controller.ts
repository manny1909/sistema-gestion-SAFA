import { Response } from "express";
import { sign, Secret, SignOptions, verify } from "jsonwebtoken";
import { config } from "dotenv";
import { models } from 'mongoose'
import boom from '@hapi/boom'
import { userModel } from '../models/user';
import { roleModel } from "../models/role";
import { AuthService } from '../services/auth.service'
import UserService from '../services/user.service'

const _userService = new UserService()
config()
const _authService = new AuthService()
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
        if (!email || !password) {
            return res.status(401).json({ error: 'Credenciales incorrectas' })
        }
        const token = await _authService.login(email, password)
        if (!token) {
            return res.status(401).json({ error: 'Credenciales incorrectas' })
        }
        return res.status(200).json({ token })
    },
    logout: async (req: any, res: Response) => { 
        try {
            const _id = req.body._id
            await userModel.findByIdAndUpdate(_id, { token: false })
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
    getUsers: async (req: any, res: Response) => {
        const users = await _userService.find()
        if (!users) {
            return boom.notFound('users not found')
        }
        return res.status(200).json(users)
    },
    registrarse: async (req: any, res: Response) => {
        try {
            const data: any = req.body.user
            const rol = await roleModel.findOne({ nombre: "user" }).select("_id")
            const { nombre, email, password } = data
            const usuario = new userModel({ nombre, password, email, estado: 0 })
            const userDB = await usuario.save()
            // const miembroDB = await miembroModel.findOneAndUpdate({}, {rol:rol._id, usuario:userDB._id}, {upsert:true})
            res.json({ userDB, ok: true })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getUserByToken: async (req: any, res: any) => {
        const payload = req.user
        const _id = payload.sub
        const user = await _userService.findOne(_id)
        delete user.password
        res.status(200).json({user})
    }

}