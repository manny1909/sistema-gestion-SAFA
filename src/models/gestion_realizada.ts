import {Schema, SchemaTypes, Types, model} from 'mongoose';
const gestionRealizadaSchema=new Schema({
    tipo_gestion:{
        type:Types.ObjectId, 
        ref:'Gestion'
    },
    estado_gestion:{
        type:Types.ObjectId, 
        ref:'Estado_gestion'
    },
    fecha:{
        type:SchemaTypes.Date, 
    },
    observaciones:{
        type:SchemaTypes.String, 
    },

})
const gestionRealizadaModel= model('Gestion_realizada', gestionRealizadaSchema)
export { gestionRealizadaModel }