import express from 'express'
import { userController } from '../controller/user.controller'
import { checkRoles } from '../middlewares/auth.handler'
import passport from 'passport'
import validatorHandler from '../middlewares/validator.handler'
import { createUserScheme } from '../schemas/user.schema'
const userRoute = express()
userRoute.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
userRoute.route('/getUsers') 
    .post(
        passport.authenticate('jwt', {session:false}),
        checkRoles('Administrador'),
        (req,res)=>{
        userController.getUsers(req, res)
    })
userRoute.route('/signIn')
    .post((req,res)=>{
        userController.login(req,res)
    })
userRoute.route('/signUp')
    .post(
        validatorHandler(createUserScheme, 'body'),
        (req,res)=>{
        userController.signUp(req,res)
    })
userRoute.route('/create')
    .post(passport.authenticate('jwt', { session: false }),
    checkRoles('Administrador'),
    validatorHandler(createUserScheme, 'body'),
    (req, res) => { 
        userController.createUser(req, res)
     }
    )
userRoute.route('/getUserByToken')
    .post(
        passport.authenticate('jwt', {session:false}),
        (req,res)=>{
        userController.getUserByToken(req,res)
    })
userRoute.route('/logout')
    .get(
        passport.authenticate('jwt', {session:false}),
        (req, res) => { 
            userController.logout(req, res)
         }
    )
export default userRoute