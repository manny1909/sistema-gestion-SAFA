import {Schema, SchemaTypes, Types, model} from 'mongoose';
const managementDoneSchema=new Schema({
    type_id:{
        type:Types.ObjectId, 
        ref:'management'
    },
    date:{
        type:SchemaTypes.Date, 
    },
    management_state:{
        type:SchemaTypes.String, 
        
    },
    observations:{
        type:SchemaTypes.String, 
    },

})
const managementDone= model('management_done', managementDoneSchema)
export { managementDone }