import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateTrackDTO} from './dto/create-track.dto';
import {TrackModel} from './dto/track.model';

const baseURL = URLResolver(EMicroservices.TRACKS);

export class TracksService {
  static async getAll() {
    const response = await axios.get(baseURL);
    return response.data.items;
  }

  static async getById(id: string) {
    const response = await axios.get(baseURL + `/${id}/`);
    return response.data;
  }

  static async create(track: CreateTrackDTO) {
    const response = await axios.post(baseURL, track);
    return response.data;
  }

  static async delete(id: string) {
    const response = await axios.delete(baseURL + `/${id}/`);
    return response.data;
  }

  static async update(id: string, track: Partial<TrackModel>) {
    const response = await axios.put(baseURL + `/${id}/`, track);
    return response.data;
  }
}
