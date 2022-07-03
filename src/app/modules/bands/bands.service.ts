import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateBandDTO} from './dto/create-band.dto';
import {BandModel} from './dto/band.model';

const baseURL = URLResolver(EMicroservices.GENRES);

export class BandsService {
  static async getAll() {
    const response = await axios.get(baseURL);
    return response.data.items;
  }

  static async getById(id: string) {
    const response = await axios.get(baseURL + `/${id}/`);
    return response.data;
  }

  static async create(band: CreateBandDTO) {
    const response = await axios.post(baseURL, band);
    return response.data;
  }

  static async delete(id: string) {
    const response = await axios.delete(baseURL + `/${id}/`);
    return response.data;
  }

  static async update(id: string, album: Partial<BandModel>) {
    const response = await axios.put(baseURL + `/${id}/`, album);
    return response.data;
  }
}
