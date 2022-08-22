import {Schema, SchemaTypes, Types, model} from 'mongoose';
const estadoGestionSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    }
})
const estadoGestionModel= model('Estado_gestion', estadoGestionSchema)
export { estadoGestionModel }