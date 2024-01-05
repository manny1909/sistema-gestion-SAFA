import express from 'express'
import { userController } from '../controller/user.controller'
import { checkRoles } from '../middlewares/auth.handler'
import passport from 'passport'
const userRoute = express()
userRoute.get('/', (req, res) => {
  res.send('GET request to the homepage')
})
userRoute.route('/getManny') 
    .get(
      // authoritation.admin,
      (req,res)=>{
        // const response:object=userController.getManny()
        // res.json(response)
    })
userRoute.route('/getUsers') 
    .post(
        // authoritation.admin,
        passport.authenticate('jwt', {session:false}),
        checkRoles('Administrador'),
        (req,res)=>{
        userController.getUsers(req, res)
    })
userRoute.route('/signIn')
    .post((req,res)=>{
        userController.iniciarSesion(req,res)
    })
userRoute.route('/signUp')
    .post((req,res)=>{
        userController.registrarse(req,res)
    })
userRoute.route('/getUserByToken')
    .post(
        passport.authenticate('jwt', {session:false}),
        (req,res)=>{
        userController.getUserByToken(req,res)
    })
export default userRoute