import { EMicroservices } from '../../constants/enums/microservices.enum';
import { CreateTrackDTO } from './dto/create-track.dto';
import { TrackModel } from './dto/track.model';
import { CommonService } from '../shared/services/abstract-common.service';

export class TracksService extends CommonService<TrackModel, CreateTrackDTO>{
  constructor() {
    super(EMicroservices.TRACKS);
  }
}
