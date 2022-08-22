import {Schema, SchemaTypes, Types, model} from 'mongoose';
const ascensoDescensoSchema=new Schema({
    militar:{
        type:Types.ObjectId, 
        ref:'Miembro'
    },
    tipo:{
        type:Types.ObjectId, 
        ref:'Tipo_ascenso'
    },
    fecha:{
        type:SchemaTypes.Date, 
    },
    observaciones:{
        type:SchemaTypes.String, 
    },

})
const ascensoDescensoModel= model('Ascenso_descenso', ascensoDescensoSchema)
export { ascensoDescensoModel }