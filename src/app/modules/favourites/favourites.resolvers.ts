import { authWrapper } from '../shared/helpers';
import { EAddToFavourites } from './enums/add-to-favourites.enum';

export const favouritesResolvers = {
  Query: {
    favourites: authWrapper(
      (_, __, { dataSources }) => dataSources.favouritesService.getAll()
    )
  },
  Mutation: {
    addTrackToFavourites: authWrapper(
      (_, { id }, { dataSources }) => dataSources.favouritesService.addToFavourites(id, EAddToFavourites.tracks)
    ),
    addBandToFavourites: authWrapper(
      (_, { id }, { dataSources }) => dataSources.favouritesService.addToFavourites(id, EAddToFavourites.bands)
    ),
    addArtistToFavourites: authWrapper(
      (_, { id }, { dataSources }) => dataSources.favouritesService.addToFavourites(id, EAddToFavourites.artists)
    ),
    addGenreToFavourites: authWrapper(
      (_, { id }, { dataSources }) => dataSources.favouritesService.addToFavourites(id, EAddToFavourites.genres)
    ),
  },
  Favourites: {
    artists: ({ artistsIds }, _, { dataSources }) =>
      artistsIds.map((id) => dataSources.artistsService.getById(id)),
    bands: ({ bandsIds }, _, { dataSources }) =>
      bandsIds.map((id) => dataSources.bandsService.getById(id)),
    tracks: ({ trackIds }, _, { dataSources }) =>
      trackIds.map((id) => dataSources.tracksService.getById(id)),
    genres: ({ genresIds }, _, { dataSources }) =>
      genresIds.map((id) => dataSources.genresService.getById(id)),
  },
}
