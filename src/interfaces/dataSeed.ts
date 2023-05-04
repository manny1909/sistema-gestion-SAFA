import mongoose from "mongoose"
import { Rol as Rol } from "./rol"
import { Estado as Estado } from "./estado"
import { Usuario } from "./usuario"

export interface dataSeed{
    roles:
    Rol[]
    estados:Estado[]
    usuarios:Usuario[]
}