import {Schema, SchemaTypes, Types, model} from 'mongoose';
const rolSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    }
})
const rolModel= model('Rol', rolSchema)
export { rolModel }