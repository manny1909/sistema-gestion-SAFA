import {Schema, SchemaTypes, Types, model, Model} from 'mongoose';
const userSchema=new Schema({
    name: {
        type: SchemaTypes.String,
        required:true,
        unique:true,
    },
    email: {
        type: SchemaTypes.String,
        required:true,
        unique:true        
    },
    password:{
        type: SchemaTypes.String,
        required:true,
    },
    token: {
        type: SchemaTypes.String,
        required: false,
        default: null
    },
    age: {
        type: SchemaTypes.Number,
    },
    discord: {
        type: SchemaTypes.String,
    },
    state: {
        type: SchemaTypes.Number,
        required: true
    },
    
    observations: {
        type: SchemaTypes.String,
    },
    roles: [
        { 
            _id: {
                type: Types.ObjectId,
                ref: 'role'
            },
            name:{
                type:SchemaTypes.String,
                
            },
            level:{
                type: SchemaTypes.Number,
                
            }
        }
    ]
})
export const userModel = model('user',userSchema)