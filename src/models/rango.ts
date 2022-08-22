import {Schema, SchemaTypes, Types, model} from 'mongoose';
const rangoSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    }
})
const rangoModel= model('Rango', rangoSchema)
export { rangoModel }