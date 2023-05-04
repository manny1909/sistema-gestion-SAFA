import {Schema, SchemaTypes, Types, model} from 'mongoose';
const gestionSchema=new Schema({
    rol_necesario:{
        type:Types.ObjectId, 
        ref:'Rol'
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