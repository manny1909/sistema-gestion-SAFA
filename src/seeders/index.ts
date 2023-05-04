import { data } from './data';
import { estadoModel } from '../models/estado';
import { userModel } from '../models/user';
import { connectDB, disconnectDB } from '../db';
import { rolModel } from '../models/rol';

let usuarios = data.usuarios
let estados = data.estados
let roles = data.roles


async function loadEstados() {
    estados = await Promise.all(
        estados.map(async estado => {
            const estadoDB = new estadoModel(estado)
            return await estadoDB.save()
            // disconnectDB()
        })
    )
    return estados;
}
async function loadRoles() {
    roles = await Promise.all(
        roles.map(async rol => {
            const rolDB = new rolModel(rol)
            return await rolDB.save()
        })
    )
    return roles;
}
async function loadUsuarios() {
    console.log(estados);
    console.log(roles);
    
    return await Promise.all(
        usuarios.map(async (user, index) => {
            user.estado = estados.find(x=>x.nombre==user.estado)?._id
            user.rol = roles.find(x=>x.nombre==user.rol)?._id
            const userDB = new userModel(user)
            return await userDB.save()
        })

    )

}
function cargarData() {
    try {
        connectDB().then(async conexion => {
            conexion.connection.dropDatabase()
            await loadEstados();

            await loadRoles()

            await loadUsuarios()
        }).finally(() => {
            disconnectDB()
        })

    } catch (error) {
        console.log(error);
    }
}

cargarData()