import { Response, Request } from "express";
import { config } from "dotenv";
import boom from '@hapi/boom'
import { AuthService } from '../services/auth.service'
import UserService from '../services/user.service'
import { User } from "../interfaces/User";

const _userService = new UserService()
config()
const _authService = new AuthService()
export const authController = {
    login: async (req: any, res: Response) => {
        const { email, password } = req.body
        if (!email || !password) {
            return boom.badData()
        }
        const user:User | null = await _userService.findByEmail(email)
        if (!user) {
            return boom.notFound('User not found')
        }
        const matchPassword = _authService.verifyPassword(password, user.password)
        if (!matchPassword) {
            return boom.unauthorized()
        }
        const response = _authService.login(user._id, user.roles)
        user.token = response.token
        _userService.findByIdAndUpdate(user._id, { token: response.token })
        return res.status(200).json({...response, roles: user.roles})
    },
    logout: async (req: any, res: Response) => {
        try {
            const _id = req.user?.sub
            await _userService.findByIdAndUpdate(_id, { token: null })
            res.status(200).json(true)

        } catch (error) {
            res.status(400).json(false)
        }
    },

    signUp: async (req: any, res: Response) => {
        try {
            const data: any = req.body.user
            const { name, email, password, discord } = data
            const usuario = await _userService.create({ name, email, password, state: 0, discord, roles: ['user'] })
            res.json({ usuario, ok: true })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    async refreshToken(req: Request, res: Response) {
        const body = req.body
        const { refreshToken }: { refreshToken: string } = body
        const payload = _authService.decodeToken(refreshToken)
        const _id = payload?.sub?.toString()
        if (!_authService.verifyToken(refreshToken) || !_id) {
            return boom.badData()
        }
        const user = await _userService.findOne(_id)
        if (!user || !user._id) {
            return boom.notFound('User not found')
        }
        const response = _authService.login(user._id, user.roles)
        return res.json(response)
    },
    getUserByToken: async (req: any, res: any) => {
        const payload = req.user
        const _id = payload.sub
        const user = await _userService.findOne(_id)
        res.status(200).json({user})
    },
    
}