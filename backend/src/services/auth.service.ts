import { hash, compare } from 'bcrypt'
import jwt from 'jsonwebtoken'
import nodemailer from 'nodemailer'
import boom from '@hapi/boom'
import { userModel } from '../models/user'
import { config } from 'dotenv'
config()
const secret = process.env.SECRET || 'mySecret'

export class AuthService {
    findUser(username: string, password: string) {
      throw new Error('Method not implemented.')
    }
    constructor(){
        
    }
    async findByEmail(email:string){
        const user = await userModel.findOne({ email })
        if (!user) {
            boom.badImplementation('Falla al consultar usuario por email')
        }
        return user
    }
    async verifyPassword(password: string, encryptedPassword:string){
        const isMatch: boolean = await compare(password, encryptedPassword)
        return isMatch
    }
    async login(email:string, password:string){
        try {
            const user = await this.findByEmail(email)
            const isMatch = await this.verifyPassword(password, user.password)
            if (!isMatch) {
                return false
            }
            const token = this.signToken(user)
            user.token = token
            await user.save()
            return token
        } catch (error) {
            throw error
        }
    }
    signToken(user:any){
        const payload = {
            sub: user._id,
            roles: user.roles
        }
        return jwt.sign(payload, secret)
    }
    verifyToken(token:string, secret:string) {
        return jwt.verify(token, secret)
    }
}