import { Response } from "express";
import { config } from "dotenv";
import { models } from 'mongoose'
import boom from '@hapi/boom'
import { userModel } from '../models/user';
import { roleModel } from "../models/role";
import UserService from '../services/user.service'

const _userService = new UserService()
config()
export const userController = {
    
    getUsers: async (req: any, res: Response) => {
        const users = await _userService.find()
        if (!users) {
            return boom.notFound('users not found')
        }
        return res.status(200).json(users)
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

}