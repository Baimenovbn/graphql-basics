import {AlbumModel} from './album.model';

export interface AlbumDTO extends AlbumModel {
  _id: string;
}
