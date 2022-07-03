import {TrackModel} from './track.model';

export interface CreateTrackDTO extends Partial<TrackModel>{
  title: string;
}
