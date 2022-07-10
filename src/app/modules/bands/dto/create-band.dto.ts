import {BandModel} from './band.model';

export interface CreateBandDTO extends Partial<BandModel>{
  name: string;
}
