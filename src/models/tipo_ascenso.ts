import {Schema, SchemaTypes, Types, model} from 'mongoose';
const tipoAscensoSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    }
})
const tipoAscensoModel= model('Tipo_ascenso', tipoAscensoSchema)
export { tipoAscensoModel }