import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateGenreDTO} from './dto/create-genre.dto';
import {GenreModel} from './dto/genre.model';

const baseURL = URLResolver(EMicroservices.GENRES);

export class GenresService {
  static async getAll() {
    const response = await axios.get(baseURL);
    return response.data.items;
  }

  static async getById(id: string) {
    const response = await axios.get(baseURL + `/${id}/`);
    return response.data;
  }

  static async create(genre: CreateGenreDTO) {
    const response = await axios.post(baseURL, genre);
    return response.data;
  }

  static async delete(id: string) {
    const response = await axios.delete(baseURL + `/${id}/`);
    return response.data;
  }

  static async update(id: string, album: Partial<GenreModel>) {
    const response = await axios.put(baseURL + `/${id}/`, album);
    return response.data;
  }
}
