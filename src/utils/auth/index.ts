import passport from 'passport'
// const LocalStrategy = require('./strategies/local.strategy')
import { JwtStrategy } from './strategies/jwt.strategy'
// passport.use('local',LocalStrategy)
passport.use('jwt',JwtStrategy)
