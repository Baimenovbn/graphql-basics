import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateAlbumDTO} from './dto/create-album.dto';
import {AlbumModel} from './dto/album.model';

const baseURL = URLResolver(EMicroservices.ALBUMS);

export class AlbumsService {
  static async getAll() {
    const response = await axios.get(baseURL);
    return response.data.items;
  }

  static async getById(id: string) {
    const response = await axios.get(baseURL + id);
    return response.data;
  }

  static async create(album: CreateAlbumDTO) {
    const response = await axios.post(baseURL, album);
    return response.data;
  }

  static async delete(id: string) {
    const response = await axios.delete(baseURL + id);
    return response.data;
  }

  static async update(id: string, album: Partial<AlbumModel>) {
    const response = await axios.put(baseURL + `${id}/`, album);
    return response.data;
  }
}
