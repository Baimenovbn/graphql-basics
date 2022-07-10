import {EMicroservices} from '../../constants/enums/microservices.enum';
import {CreateBandDTO} from './dto/create-band.dto';
import {BandModel} from './dto/band.model';
import { CommonService } from '../shared/services/abstract-common.service';

export class BandsService extends CommonService<BandModel, CreateBandDTO> {
  constructor() {
    super(EMicroservices.BANDS);
  }
}
