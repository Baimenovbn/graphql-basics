import { albumSchema } from './albums';
import { artistSchema } from './artists';
import { bandSchema } from './bands';
import { favouriteSchema } from './favourites';
import { genreSchema } from './genres';
import { trackSchema } from './tracks';
import { userSchema } from './users';

export const typeDefs = [
  albumSchema,
  artistSchema,
  bandSchema,
  favouriteSchema,
  genreSchema,
  trackSchema,
  userSchema,
];
