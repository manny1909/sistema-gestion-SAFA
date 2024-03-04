import { Request, Response } from "express";
import { config } from "dotenv";
import boom from '@hapi/boom'
import { UserCreate } from '../interfaces/User'
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
    createUser: async (req: Request, res: Response) => {
        const { user } = req.body
        const { discord, email, name, roles } = user
        const password = randomPassword();
        const userCreate: UserCreate = { discord, name, email, password, state: 0, roles }
        const newUser = await _userService.create(userCreate)
            .catch(err => {
                console.log(err)
                throw boom.conflict('user already exists')
                
            })
        return res.status(201).json(newUser)
    },

}
function randomPassword() {
    const length = 8;
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = '';
    for (let i = 0; i < length; i++) {
        password += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    return password
}