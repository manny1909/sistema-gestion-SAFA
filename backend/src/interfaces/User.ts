import mongoose from "mongoose"

export interface User {
    _id?: string | mongoose.Types.ObjectId | any
    name: string
    email: string
    password: string
    token: string
    age: string
    discord: string
    state: number
    observations: string
    roles: any[]
}
export interface UserCreate {
    // Define la estructura de un usuario al ser creado
    // Asegúrate de ajustar esto según la estructura real de tu modelo User de Mongoose
    discord: string;
    name: string;
    email: string;
    password: string;
    state: number
    roles: any[]
    // ... otros campos
  }