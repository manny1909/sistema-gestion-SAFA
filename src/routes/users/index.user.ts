import { Router } from "express";
const indexUsers:Router=Router()
// indexUsers.route('/getManny') 
//     .get(authoritation.admin,(req,res)=>{
//         const response:object=userController.getManny()
//         res.json(response)
//     })
// indexUsers.route('/getUsers') 
//     .post(
//         // authoritation.admin,
//         (req,res)=>{
//         const response:object=userController.getUsers(req, res)
//     })
// indexUsers.route('/signIn')
//     .post((req,res)=>{
//         userController.iniciarSesion(req,res)
//     })
// indexUsers.route('/signUp')
//     .post((req,res)=>{
//         userController.registrarse(req,res)
//     })
// indexUsers.route('/getUserByToken')
//     .post((req,res)=>{
//         userController.getUserByToken(req,res)
//     })
export default indexUsers; 
