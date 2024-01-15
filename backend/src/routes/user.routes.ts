import express from 'express'
import { userController } from '../controller/user.controller'
import { checkRoles } from '../middlewares/auth.handler'
import passport from 'passport'
const user = express()
user.get('/', (req, res) => {
    res.send('GET request to the homepage')
})
user.route('/getUsers')
    .post(
        passport.authenticate('jwt', { session: false }),
        checkRoles('Administrador'),
        (req, res) => {
            userController.getUsers(req, res)
        })

export default user