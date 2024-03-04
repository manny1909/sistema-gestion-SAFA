import bcrypt from 'bcrypt';

// Asegúrate de importar tu modelo de mongoose llamado User
import { userModel } from './../models/user';
import { User, UserCreate } from '../interfaces/User';
import { roleModel } from '../models/role';

class UserService {
  private users: UserCreate[] = [];
  
  async findByIdAndUpdate(_id: any, value: object) {
    return await userModel.findByIdAndUpdate(_id, value)
  }
  async create(user: UserCreate): Promise<UserCreate> {
    const roles = await roleModel.where({ name: { $in: user.roles } }).catch(err => console.log(err)); 
    user.roles = roles || []
    user.password = await bcrypt.hash(user.password, 10);
    const response = await userModel.create(user);
    return response;
  }

  async find(_id?: string): Promise<any> {
    const options = _id ? { _id } : {};
    const response = await userModel.find(options);
    return response;
  }

  async findByEmail(email: string) {
    const user:User | null = await userModel.findOne({ email })
    if (!user) {
      return null
    }
    return user
  }

  async findOne(_id: string): Promise<User | null> {
    const response = await userModel.findOne({ _id });
    return response
  }

  async delete(_id: string): Promise<boolean> {
    const response = await userModel.deleteOne({ _id });
    return response && response.deletedCount > 0;
  }

  // Agrega la implementación del método update
  async update(id: string, body: Partial<UserCreate>): Promise<UserCreate | null> {
    // Aquí debes implementar la lógica para actualizar un usuario
    const response = await userModel.findByIdAndUpdate(id, { ...body }, { new: true });
    return response ? response : null;
  }
}

export default UserService;