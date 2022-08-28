import { Router } from "express";
import {userController} from '../../controller/user/user.controller';
import { authoritation, } from '../../middlewares/index';
const indexUsers:Router=Router()
indexUsers.route('/getManny') 
    .get(authoritation.admin,(req,res)=>{
        const response:object=userController.getManny()
        res.json(response)
    })
indexUsers.route('/signIn')
    .post((req,res)=>{
        userController.iniciarSesion(req,res)
    })

export default indexUsers; 
