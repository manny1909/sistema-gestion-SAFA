import {Schema, SchemaTypes, Types, model} from 'mongoose';
const managementAssistantSchema=new Schema({
    assistant_id:{
        type:Types.ObjectId, 
        ref:'user'
    },
    assistant_type:{
        type:SchemaTypes.String, 
        required:true
    },
    management_id:{
        type:Types.ObjectId, 
        ref:'management_done'
    },
    assistant: {
        name: {
            type:SchemaTypes.String,
            required:true
        },
        roles: [
            {
                name: {
                    type: SchemaTypes.String
                },
                level: {
                    type:SchemaTypes.Number
                }
            }
        ]
    }

})
const managementAssistantModel= model('management_assistant', managementAssistantSchema)
export { managementAssistantModel }