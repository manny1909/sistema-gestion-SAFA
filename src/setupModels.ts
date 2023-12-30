import mongoose from 'mongoose'

import { userModel } from './models/user'
import { roleModel } from './models/role'
import { managementAssistantModel } from './models/management_assistant'
import { managementModel } from './models/management'
import { managementDone } from './models/management_done'
import { ascentDescentModel } from './models/ascent_descent'

async function setupModels() {
    try {
        await userModel.init()
        await roleModel.init()
        await ascentDescentModel.init()
        await managementModel.init()
        await managementDone.init()
        await managementAssistantModel.init()
        return mongoose
    } catch (error) {
        throw error
    }
}
export default setupModels