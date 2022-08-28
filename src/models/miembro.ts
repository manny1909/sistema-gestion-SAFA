import {Schema, SchemaTypes, Types, model, Model} from 'mongoose';
const miembroSchema=new Schema({
    persona:{
        type:Types.ObjectId, 
        ref:'Usuario'
    },
    rango:{
        type:Types.ObjectId, 
        ref:'Rango'
    },
    

})
const miembroModel:Model<any>= model('Miembro', miembroSchema)
export { miembroModel }