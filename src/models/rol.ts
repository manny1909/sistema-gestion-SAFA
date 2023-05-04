import {Schema, SchemaTypes, Types, model} from 'mongoose';
const rolSchema=new Schema({
    nombre:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    },
    nivel:{
        type:SchemaTypes.Number, 
        unique: true,
        required:true,
    }
})
const rolModel= model('Rol', rolSchema)
var roles:any[] 
 rolModel.find().then(_role=>roles=_role)
export { rolModel, roles }