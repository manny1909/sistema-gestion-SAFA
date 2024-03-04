import express from 'express'
import { userController } from '../controller/user.controller'
import { checkRoles } from '../middlewares/auth.handler'
import passport from 'passport'
import validatorHandler from '../middlewares/validator.handler'
import { createUserScheme } from '../schemas/user.schema'
const user = express()
user.use(passport.authenticate('jwt', { session: false }))
user.use(checkRoles('Administrador'))
user.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
user.route('/getUsers')
    .post(
        (req, res, next) => {
            userController.getUsers(req, res).catch(e => next(e))
        })
user.route('/create')
    .post(
        validatorHandler(createUserScheme, 'body'),
        (req, res, next) => {
            return userController.createUser(req, res).catch(e => next(e))
        });

export default user