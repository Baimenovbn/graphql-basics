import {AlbumModel} from './album.model';

export interface CreateAlbumDTO extends Partial<AlbumModel> {
  name: string;
}
