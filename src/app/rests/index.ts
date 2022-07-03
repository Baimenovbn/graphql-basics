import {EMicroservices} from '../constants/enums/microservices.enum';

const portMapper: Record<EMicroservices, string | number> = {
  [EMicroservices.GENRES]: process.env.GENRES_PORT || 3001,
  [EMicroservices.ARTISTS]: process.env.ARTISTS_PORT || 3002,
  [EMicroservices.BANDS]: process.env.BANDS_PORT || 3003,
  [EMicroservices.USERS]: process.env.USERS_PORT || 3004,
  [EMicroservices.ALBUMS]: process.env.ALBUMS_PORT || 3005,
  [EMicroservices.TRACKS]: process.env.TRACKS_PORT || 3006,
  [EMicroservices.FAVOURITES]: process.env.FAVOURITES_PORT || 3007,
}

export const URLResolver = (serviceName: EMicroservices) => {
  const port = portMapper[serviceName];

  return `http://localhost:${port}/v1/${serviceName}/`;
};

