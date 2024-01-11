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
export const userController = {
    login: async (req: any, res: Response) => {
        const { email, password } = req.body
        if (!email || !password) {
            return res.status(401).json({ error: 'Credenciales incorrectas' })
        }
        const response = await _authService.login(email, password)
        
        if (!response || !response.token) {
            return res.status(401).json({ error: 'Credenciales incorrectas' })
        }
        const {token, roles} = response
        return res.status(200).json({ token,  roles})
    },
    logout: async (req: any, res: Response) => { 
        try {
            const _id = req.user?.sub
            await userModel.findByIdAndUpdate(_id, { token: null })
            res.status(200).json(true)

        } catch (error) {
            res.status(400).json(false)
        }
    },
    
    getUsers: async (req: any, res: Response) => {
        const users = await _userService.find()
        if (!users) {
            return boom.notFound('users not found')
        }
        return res.status(200).json(users)
    },
    signUp: async (req: any, res: Response) => {
        try {
            const data: any = req.body.user
            const rol = await roleModel.findOne({ name: "customer" })
            const { name, email, password } = data
            const usuario = await _userService.create({name, email, password, state:0})
            res.json({ usuario, ok: true })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    createUser: async (req: any, res: Response) => {
        try {
            const data: any = req.body.user
            const rol = await roleModel.findOne({ name: "customer" })
            const { name, email, password } = data
            const usuario = await _userService.create({name, email, password, state:0})
            res.json({ usuario, ok: true })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getUserByToken: async (req: any, res: any) => {
        const payload = req.user
        const _id = payload.sub
        const user = await _userService.findOne(_id)
        res.status(200).json({user})
    }

}