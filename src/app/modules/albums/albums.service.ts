import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateAlbumDTO} from './dto/create-album.dto';
import {AlbumModel} from './dto/album.model';
import { CommonService } from '../shared/services/abstract-common.service';

export class AlbumsService extends CommonService<AlbumModel, CreateAlbumDTO> {
  constructor() {
    super(EMicroservices.ALBUMS);
  }
}
