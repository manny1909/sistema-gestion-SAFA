import {Schema, SchemaTypes, Types, model} from 'mongoose';
const gestionSchema=new Schema({
    rango_necesario:{
        type:Types.ObjectId, 
        ref:'Rango'
    },
    nombre_gestion:{
        type:SchemaTypes.String, 
        required: true,
        unique: true,
    },
    descripcion:{
        type:SchemaTypes.String, 
    },

})
const gestionModel= model('Gestion', gestionSchema)
export { gestionModel }