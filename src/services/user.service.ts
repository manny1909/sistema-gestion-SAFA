import boom from '@hapi/boom';
import bcrypt from 'bcrypt';
import { Document, Model } from 'mongoose';

// Asegúrate de importar tu modelo de mongoose llamado User
import { userModel } from './../models/user'; 

interface UserCreate {
  // Define la estructura de un usuario al ser creado
  // Asegúrate de ajustar esto según la estructura real de tu modelo User de Mongoose
  name: string;
  email: string;
  password: string;
  state:number
  // ... otros campos
}

class UserService {
  private users: UserCreate[] = [];

  async create(user: UserCreate): Promise<UserCreate> {
    user.password = await bcrypt.hash(user.password, 10);
    const response = await userModel.create(user);
    return response;
  }

  async find(_id?: string): Promise<any> {
    const options = _id ? { _id } : {};
    const response = await userModel.find(options);
    return response;
  }

  async findOne(_id: string): Promise<any> {
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
    const response = await userModel.findByIdAndUpdate(id, {...body}, { new: true });
    return response ? response : null;
  }
}

export default UserService;