import {Schema, SchemaTypes, Types, model} from 'mongoose';
const estadoSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
        default: 'activado',
    }
})
const estadoModel= model('Estado', estadoSchema)
export { estadoModel }