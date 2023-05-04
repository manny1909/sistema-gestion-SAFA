import { data } from './data';
import { estadoModel } from '../models/estado';
import { userModel } from '../models/user';
import { connectDB, disconnectDB } from '../db';
import { rolModel } from '../models/rol';
import { miembroModel } from '../models/miembro';

let estados = data.estados
let roles = data.roles
let usuarios = data.usuarios
let miembros = data.miembros

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
    usuarios = await Promise.all(
        usuarios.map(async (user, index) => {
            user.estado = estados.find(x=>x.nombre==user.estado)?._id
            const userDB = new userModel(user)
            return await userDB.save()
        })
    )
    return usuarios

}
async function loadMiembros() {
    miembros = await Promise.all(
        miembros.map(async (miembro)=>{
            miembro.rol = roles.find(x=>x.nombre==miembro.rol)?._id
            miembro.usuario = usuarios.find(x=>x.nombre==miembro.usuario)?._id
            const miembroDB = new miembroModel(miembro)
            return await miembroDB.save()
        })
    )
    return miembros
}
function cargarData() {
    try {
        connectDB().then(async conexion => {
            await conexion.connection.dropDatabase()

            await loadEstados();

            await loadRoles()

            await loadUsuarios()

            await loadMiembros();
        }).finally(() => {
            disconnectDB()
        })

    } catch (error) {
        console.log(error);
    }
}

cargarData()