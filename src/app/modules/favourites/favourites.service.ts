import axios from 'axios';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';

const baseURL = URLResolver(EMicroservices.FAVOURITES);

export type addFavourite = 'bands' | 'genres' | 'artists' | 'tracks';
export type removeFavourite = 'band' | 'genre' | 'artist' | 'track';

export class FavouritesService {
  static async addToFavourites(id: string, type: addFavourite) {
    return axios.put(baseURL + '/add', { id, type });
  }

  static async getAll() {
    return axios.get(baseURL);
  }

  static async deleteFromFavourites(id: string, type: removeFavourite) {
    return axios.put(baseURL + '/remove', { id, type });
  }
}
