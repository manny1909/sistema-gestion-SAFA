import { connectDB, disconnectDB } from "../db"
import { estadoModel } from "../models/estado"
async function foraneas() {
    await connectDB()
    var activado=await estadoModel.findOne({nombre:"activado"}).select('_id')
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
                    "nombre": "admin",
                    "email": "magnuscoltello@gmail.com",
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