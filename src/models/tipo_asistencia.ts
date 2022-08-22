import {Schema, SchemaTypes, Types, model} from 'mongoose';
const tipoAsistenciaSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    }
})
const tipoAsistenciaModel= model('Tipo_asistencia', tipoAsistenciaSchema)
export { tipoAsistenciaModel }