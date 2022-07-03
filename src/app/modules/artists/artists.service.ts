import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateArtistDTO} from './dto/create-artist.dto';
import {ArtistModel} from './dto/artist.model';

const baseURL = URLResolver(EMicroservices.ARTISTS);

export class ArtistsService {
  static async getAll() {
    const response = await axios.get(baseURL);
    return response.data.items;
  }

  static async getById(id: string) {
    const response = await axios.get(baseURL + `/${id}`);
    return response.data;
  }

  static async create(artist: CreateArtistDTO) {
    const response = await axios.post(baseURL, artist);
    return response.data;
  }

  static async delete(id: string) {
    const response = await axios.delete(baseURL + `/${id}`);
    return response.data;
  }

  static async update(id: string, artist: Partial<ArtistModel>) {
    const response = await axios.put(baseURL, artist);
    return response.data;
  }
}
