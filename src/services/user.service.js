const boom = require('@hapi/boom');
const { models } = require('./../libs/sequelize');
const bcrypt = require('bcrypt');

const User = models.User;
class UserService {

    constructor() {
        this.users = []
    }
    
    async create(user) {
        user.password = await bcrypt.hash(user.password, 10)
        const response = await User.create(user)
        return response
    }
    async find(id) {
        const options = id ? { id } : {}
        const response = await User.findAll({ id })
        return this.users
    }
    async findOne(id) {
        const response = await User.findOne({ id })
        return response ? response : boom.notFound('User not found')
    }
    
    async delete(id) {
        const response = await User.destroy({ where: {id}})
        return response && response>0
    }
    update(id, body){
        
    }
}
module.exports = UserService
