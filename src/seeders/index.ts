import { foraneas } from './data';
import { estadoModel } from '../models/estado';
import { userModel } from '../models/user';
import { connectDB, disconnectDB } from '../db';
async function cargarData() {
    const data = await foraneas()
    const estados = data.estados
    const usuarios = data.usuarios
    console.log(usuarios);
    
    estados.map(async estado => {
        const estadoDB = new estadoModel(estado)
        await connectDB()
        await estadoDB.save()
    })
    usuarios.map(async user => {
        await connectDB()
        if (user.estado== null) {
            const estadoDB=new estadoModel({
                nombre:'activado'
            })
            await estadoDB.save()
            user.estado=await estadoModel.findOne({nombre:"activado"}).select('_id')
        }
        const userDB = new userModel(user)
        await userDB.save()
        await disconnectDB()
    })
}
cargarData()