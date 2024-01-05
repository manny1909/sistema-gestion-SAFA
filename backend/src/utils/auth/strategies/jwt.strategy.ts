import { ExtractJwt, Strategy } from 'passport-jwt'
import {config} from 'dotenv'
config()
const secret = process.env.SECRET || 'mySecret'
const options = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:secret
}
export const JwtStrategy = new Strategy(options, (payload, done) => { 
    return done(null, payload)
 })

