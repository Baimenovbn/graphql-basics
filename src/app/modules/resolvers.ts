import { albumResolvers } from './albums';
import { artistResolvers } from './artists';
import { genreResolvers } from './genres';
import { bandResolvers } from './bands';
import { trackResolvers } from './tracks'
import { favouritesResolvers } from './favourites/favourites.resolvers';
import { userResolvers } from './users/user.resolvers';

export const resolvers = [
  albumResolvers,
  artistResolvers,
  genreResolvers,
  bandResolvers,
  trackResolvers,
  favouritesResolvers,
  userResolvers,
];
