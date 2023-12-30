import mongoose from 'mongoose'
import { connectDB } from '../db'
import { roleModel } from '../models/role'
import { userModel } from '../models/user'
import setupModels from '../setupModels'
import { data } from './data'
const { users, roles } = data

async function run() {
    try {
        await connectDB()
        await setupModels()
        const responseRoles = await roleModel.insertMany(roles)
        const responseUsers = await userModel.insertMany(users.map(u=>({...u, roles: responseRoles})))
        if (!responseRoles) {
            console.log('falsoo')
        }
        console.log(responseUsers)
        await mongoose.disconnect()

    } catch (error) {
        throw error;
    }
}
run().catch((error) => { console.error(error); })