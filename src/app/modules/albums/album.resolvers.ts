import { authWrapper } from '../shared/helpers';

export const albumResolvers = {
  Query: {
    albums: (_, { pagination }, { dataSources }) => dataSources.albumsService.getAll(pagination),
    album: (_, { id  }, { dataSources }) => dataSources.albumsService.getById(id),
  },
  Mutation: {
    createAlbum: authWrapper(
      (_, { album }, { dataSources }) => dataSources.albumsService.create(album)
    ),
    updateAlbum: authWrapper(
      (_, { id, album }, { dataSources }) => dataSources.albumsService.update(id, album)
    ),
    deleteAlbum: authWrapper(
      (_, { id }, { dataSources }) => dataSources.albumsService.remove(id)
    ),
  },
  Album: {
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
