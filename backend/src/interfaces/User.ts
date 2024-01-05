import mongoose from "mongoose"

export interface User{
    _id?:string | mongoose.Types.ObjectId |any
    name:string
    email:string
    password:string
    age:string | number 
    discord:string
    estado:number
    token:string
    roles: any[]
    observaciones:string
}