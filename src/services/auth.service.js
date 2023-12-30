const boom = require('@hapi/boom');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const nodemailer = require("nodemailer");
const { models } = require('./../libs/sequelize');

const User = models.User;

const secret = process.env.SECRET || 'mySecret'

class AuthService {
    async findUser(email, password) {
        //username es el email en este caso
        const user = await User.findOne({ where: { email }, include: ['roles'] })
        if (!user) {
            boom.unauthorized()
        } else {
            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) {
                boom.unauthorized()
            } else {
                delete user.password
                return user
            }
        }

    }
    async findByEmail(username) {
        const user = {
            username: 'aaa@gmail.com',
            password: '$2b$10$Z43ni.Ai8aAd5FlaG7eOeuiHI/zom3QVu6xbT1ihB49YrcnGd2CD.'
        }
        return user.username == username ? user : undefined
    }

    signToken(user) {
        const payload = {
            sub: user._id,
            role: user.roles,
        }
        return jwt.sign(payload, secret)
    }
    verifyToken(token, secret) {
        return jwt.verify(token, secret)
    }
    async sendRecoveryPasswordEmail(email){
        const user = await User.findOne({ where: { email } })
        if (!user) {
            throw boom.unauthorized()
        } else {
            const mail = {
                from: 'appET@pwc.com', // sender address
                to: email, // list of receivers
                subject: "Correo de recuperación", // Subject line
                text: "Hello world?", // plain text body
                html: "<b>Hello world?</b>", // html body
            }
            
            this.sendMail(mail)            
        }
    }
    async sendMail(mail) {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "pruebacursoplatzi@gmail.com",
                pass: "bavl tihe doba yvca",
            },
        });
        const infoEmail = await transporter.sendMail(mail);
        

        console.log("Message sent: %s", infoEmail.messageId);
    }
}
module.exports = AuthService
