import { connectDB, disconnectDB } from "../db"
import { estadoModel } from "../models/estado"
import {rolModel} from '../models/rol';
async function foraneas() {
    await connectDB()
    var activado=await estadoModel.findOne({nombre:"activado"}).select('_id')
    var adminRole= await rolModel.findOne({nombre:'admin'})
    let intentosAdmin=0
    while(!adminRole && intentosAdmin<5){
        intentosAdmin++
       const admin= new rolModel({nombre:'admin'})
       await admin.save()
       adminRole = await rolModel.findOne({nombre:'admin'})
    }
    var userRole= await rolModel.findOne({nombre:'user'})
    let intentosUser=0
    while(!userRole && intentosUser<5){
        intentosUser++
       const user= new rolModel({nombre:'user'})
       await user.save()
       adminRole = await rolModel.findOne({nombre:'user'})
    }
    await disconnectDB()
    const data = {
        "estados":
            [
                {
                    "nombre": "desactivado"
                },
            ],
        "usuarios":
            [
                {
                    "rol": adminRole,
                    "nombre": "admin",
                    "email": "magnuscoltello@gmail.com",
                    "password": "SAFA2022",
                    "edad": 1,
                    "discord": "manny1909#4506",
                    "estado": activado,
                    "observaciones": "registrado por medio de los seeders",
                },
                {
                    "rol": userRole,
                    "nombre": "user",
                    "email": "safagestion2022@gmail.com",
                    "password": "SAFA2022",
                    "edad": 1,
                    "discord": "manny1909#4506",
                    "estado": activado,
                    "observaciones": "registrado por medio de los seeders",
                }
            ]
    }
    return data
}
export {foraneas}