import express from 'express'
import passport from 'passport'
import { authController } from '../controller/auth.controller'
const auth = express()
auth.route('/signIn')
    .post((req, res) => {
        authController.login(req, res)
    })
auth.route('/signUp')
    .post((req, res) => {
        authController.signUp(req, res)
    })
auth.route('/logout')
    .get(
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            authController.logout(req, res)
        }
    )
auth.route('/refresh')
    .post(
        (req, res) => {
            return authController.refreshToken(req, res)
        }
    )
auth.route('/getUserByToken')
    .post(
        passport.authenticate('jwt', { session: false }),
        (req, res) => {
            authController.getUserByToken(req, res)
        })
export default auth