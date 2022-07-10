import { RequestOptions, RESTDataSource } from 'apollo-datasource-rest';

import {URLResolver} from '../../rests';
import {EMicroservices} from '../../constants/enums/microservices.enum';
import { EAddToFavourites } from './enums/add-to-favourites.enum';
import { ERemoveFromFavourites } from './enums/remove-from-favourites.enum';

export class FavouritesService extends RESTDataSource {
  baseURL = URLResolver(EMicroservices.FAVOURITES);

  protected willSendRequest(request: RequestOptions & { user: any }) {
    request.headers.set('authorization', this.context.token);
    request.user = this.context.user;
  }

  getAll() {
    return this.get('');
  }

  addToFavourites(id: string, type: EAddToFavourites) {
    return this.put('add', { id, type });
  }

  removeFromFavourites(id: string, type: ERemoveFromFavourites) {
    return this.put('remove', { id, type });
  }
}
