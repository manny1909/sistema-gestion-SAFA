import mongoose from "mongoose";

export interface Miembro{
    usuario: string | mongoose.Types.ObjectId
    rol: string | mongoose.Types.ObjectId
}