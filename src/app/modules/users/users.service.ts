import { RESTDataSource } from 'apollo-datasource-rest';
import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import {UserModel} from './dto/user.model';
import { toPlainObject } from '../shared/helpers';

export class UsersService extends RESTDataSource {
  baseURL = URLResolver(EMicroservices.USERS);

  static async verify(token: string) {
    return axios.post(URLResolver(EMicroservices.USERS) + 'verify', {}, {
      headers: {
        authorization: token,
      }
    })
  }

  async getById(id: string) {
    try {
      return await this.get(id)
    } catch (e) {
      return null;
    }
  }

  register(user: UserModel) {
    return this.post('register', toPlainObject(user));
  }

  login(email: string, password: string) {
    return this.post('login', { email, password });
  }
}
