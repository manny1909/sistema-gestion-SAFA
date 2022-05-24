import { Router } from "express";
import userController from '../../controller/user/user.controller';
const indexUsers:Router=Router()
indexUsers.route('/getManny')
    .get((req,res)=>{
        const response:object=userController.getManny()
        res.json(response)
    })
export default indexUsers; 
