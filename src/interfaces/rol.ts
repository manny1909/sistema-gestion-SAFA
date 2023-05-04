import mongoose from "mongoose"

export interface Rol {
    _id?:string | mongoose.Types.ObjectId | any
    nombre:string
    nivel:number
}