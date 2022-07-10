import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateArtistDTO} from './dto/create-artist.dto';
import {ArtistModel} from './dto/artist.model';
import { CommonService } from '../shared/services/abstract-common.service';

export class ArtistsService extends CommonService<ArtistModel, CreateArtistDTO> {
  constructor() {
    super(EMicroservices.ARTISTS);
  }
}
