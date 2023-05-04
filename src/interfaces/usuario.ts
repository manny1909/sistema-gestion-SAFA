import mongoose from "mongoose"

export interface Usuario{
    rol:mongoose.Types.ObjectId | string | any
    nombre:string
    email:string
    password:string
    edad:string | number 
    discord:string
    estado:mongoose.Types.ObjectId | string | any
    observaciones:string
}