import {ArtistModel} from './artist.model';

export interface CreateArtistDTO extends Partial<ArtistModel> {
  firstName: string;
  secondName: string;
}
