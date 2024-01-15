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