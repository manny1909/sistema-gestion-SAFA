import {Schema, SchemaTypes, Types, model} from 'mongoose';
const managementSchema=new Schema({
    name:{
        type:SchemaTypes.String, 
        required: true,
        unique: true,
    },
    required_role_ids: [
        {
            type:Types.ObjectId,
            ref: 'role'
        }
    ],
    description:{
        type:SchemaTypes.String, 
        required:true,
    },

})
const managementModel= model('management', managementSchema)
export { managementModel }