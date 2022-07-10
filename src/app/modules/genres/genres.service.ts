import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateGenreDTO} from './dto/create-genre.dto';
import {GenreModel} from './dto/genre.model';
import { CommonService } from '../shared/services/abstract-common.service';

export class GenresService extends CommonService<GenreModel, CreateGenreDTO>{
  constructor() {
    super(EMicroservices.GENRES);
  }
}
