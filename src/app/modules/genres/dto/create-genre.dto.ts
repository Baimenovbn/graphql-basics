import {GenreModel} from './genre.model';

export interface CreateGenreDTO extends Partial<GenreModel>{
  name: string;
}
