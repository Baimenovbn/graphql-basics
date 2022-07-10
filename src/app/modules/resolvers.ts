import { albumResolvers } from './albums';
import { artistResolvers } from './artists';
import { bandResolvers } from './bands';
import { favouritesResolvers } from './favourites';
import { genreResolvers } from './genres';
import { trackResolvers } from './tracks'
import { userResolvers } from './users/user.resolvers';

export const resolvers = [
  albumResolvers,
  artistResolvers,
  bandResolvers,
  favouritesResolvers,
  genreResolvers,
  trackResolvers,
  userResolvers,
];
