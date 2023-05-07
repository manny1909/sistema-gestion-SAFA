import {Schema, SchemaTypes, Types, model, Model} from 'mongoose';
const userSchema=new Schema({
    nombre: {
        type: SchemaTypes.String,
        required:true,
        unique:true,
    },
    email: {
        type: SchemaTypes.String,
        required:true,
        unique:true        
    },
    password:{
        type: SchemaTypes.String,
        required:true,
    },
    edad: {
        type: SchemaTypes.Number,
    },
    discord: {
        type: SchemaTypes.String,
    },
    estado: {
        type: Types.ObjectId,
        ref: 'Estado',
        required: true
    },
    sesion: {
        type: SchemaTypes.Boolean,
        required: false,
        default: false
    },
    observaciones: {
        type: SchemaTypes.String,
    },
    
})
export const userModel = model('Usuario',userSchema)