const passport = require('passport');
const express = require('express');
const ProductService = require('../services/product.service');
const UserService = require('../services/user.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createUserScheme, updateUserScheme, getUserScheme, loginUserScheme } = require('../schemas/user.schema');
const { checkApiKey, checkAdminRole, checkRoles } = require('../middlewares/auth.handler');
const AuthService = require('../services/auth.service');
const usersRouter = express()
const _userService = new UserService()
const _authService = new AuthService()

usersRouter.get('/', (req, res) => {
    const { size } = req.query
    const products = _userService.find()
    res.json(products)
})
usersRouter.get('/:id', validatorHandler(getUserScheme, 'params'), (req, res) => {
    const { id } = req.params
    const product = _userService.findOne(id)
    res.json(product)
})

usersRouter.post('/', passport.authenticate('jwt', { session: false }), checkRoles('administrator', 'pwc user'),
    validatorHandler(createUserScheme, 'body'), async (req, res) => {
        const newUser = req.body
        try {
            const response = await _userService.create(newUser)
            res.json({ message: 'User created', user: response })
            
        } catch (error) {
            console.error(error)
        }
    })
// POST /user/authenticate
usersRouter.post('/authenticate', validatorHandler(loginUserScheme, 'body'), async (req, res) => {
    const { email, password } = req.body
    console.log(password, email)
    const user = await _authService.findUser(email, password)
    // delete response.password
    if (!user) {
        return res.json({ error: 'Token no generated' })
    }
    const token = _authService.signToken(user)
    res.json({ token, user })
})
usersRouter.delete('/:id', passport.authenticate('jwt', { session:false }), checkRoles('administrator'),
validatorHandler(getUserScheme, 'params'), async (req, res) => { 
    const {id} = req.params
    const response = await _userService.delete(id)
    if (!response) {
        res.json({error: 'usuario no eliminado'})
    }
    res.json({message: 'usuario eliminado', response})
 })
module.exports = usersRouter
