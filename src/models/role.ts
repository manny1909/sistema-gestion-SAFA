import {Schema, SchemaTypes, Types, model} from 'mongoose';
const roleSchema=new Schema({
    name:{
        type:SchemaTypes.String, 
        unique: true,
        required:true,
    },
    level:{
        type:SchemaTypes.Number, 
        required:true,
    }
})
const roleModel= model('role', roleSchema)
export { roleModel }