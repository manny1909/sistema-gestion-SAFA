import { hash, compare } from 'bcrypt'
import { decode, sign, verify } from 'jsonwebtoken'
import { config } from 'dotenv'
config()
const secret = process.env.SECRET || 'mySecret'

export class AuthService {
    constructor(){
        
    }
    async verifyPassword(password: string, encryptedPassword:string){
        const isMatch: boolean = await compare(password, encryptedPassword)
        return isMatch
    }
    login(_id:string, roles:any[]){
        const token = this.signToken(_id, roles)
        const refreshToken = this.refreshToken(_id)
        return {token, refreshToken}
    }
    signToken(_id:string, roles:any[]){
        const payload = {
            sub: _id,
            roles: roles
        }
        return sign(payload, secret, {expiresIn: '1d'})
    }
    refreshToken (_id:string){
        const payload = {
            sub: _id,
        }
        return sign(payload, secret, { expiresIn: '2d'})
    }
    verifyToken(token:string) {
        return verify(token, secret)
    }
    decodeToken(token:string){
        if (!token) {
            return undefined
        }
        return decode(token)
    }
}