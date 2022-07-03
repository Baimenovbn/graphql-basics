import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import axios from 'axios';
import {UserModel} from './dto/user.model';

const baseURL = URLResolver(EMicroservices.USERS);

export class UsersService {
  static async findById(id: string) {
    const response = await axios.get(baseURL + id);
    return response.data;
  }

  static async register(user: UserModel) {
    const response = await axios.post(baseURL + 'register', user);
    return response.data;
  }

  static verify() {
    return axios.post(baseURL + 'verify')
  }

  static async jwt(email: string, password: string) {
    const response = await axios.post(baseURL + 'login', { email, password });
    return response.data;
  }
}
