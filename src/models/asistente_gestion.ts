import {Schema, SchemaTypes, Types, model} from 'mongoose';
const asistenteGestionSchema=new Schema({
    miembro:{
        type:Types.ObjectId, 
        ref:'Miembro'
    },
    tipo_asistencia:{
        type:Types.ObjectId, 
        ref:'Tipo_asistencia'
    },
    gestion_realizada:{
        type:Types.ObjectId, 
        ref:'Gestion_realizada'
    },

})
const asistenteGestionModel= model('Asistente_gestion', asistenteGestionSchema)
export { asistenteGestionModel }