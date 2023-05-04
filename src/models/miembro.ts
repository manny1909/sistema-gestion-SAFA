import {Schema, Types, model, Model} from 'mongoose';
const miembroSchema=new Schema({
    usuario:{
        type:Types.ObjectId, 
        ref:'Usuario'
    },
    rol:{
        type:Types.ObjectId, 
        ref:'Rol'
    },
    

})
const miembroModel:Model<any>= model('Miembro', miembroSchema)
export { miembroModel }