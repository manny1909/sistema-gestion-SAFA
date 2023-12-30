import {Schema, SchemaTypes, Types, model} from 'mongoose';
const ascentDescentSchema=new Schema({
    user_id: {
        type:Types.ObjectId, 
        ref:'user'
    },
    date: {
        type:SchemaTypes.Date, 
        required:true,
    },
    type: {
        type:SchemaTypes.String, 
        required:true,
    },
    observations: {
        type:SchemaTypes.String, 
    },
    user: {
        name: {
            type: SchemaTypes.String
        },
        roles: [
            {
                name: {
                    type: SchemaTypes.String,

                },
                level: {
                    type: SchemaTypes.Number,

                }
            }
        ]
    }

})
const ascentDescentModel= model('ascent_descent', ascentDescentSchema)
export { ascentDescentModel }