import { authWrapper } from '../shared/helpers';

export const artistResolvers = {
  Query: {
    artists: (_, { pagination }, { dataSources }) => dataSources.artistsService.getAll(pagination),
    artist: (_, { id }, { dataSources }) => dataSources.artistsService.getById(id),
  },
  Mutation: {
    createArtist: authWrapper(
      (_, { artist }, { dataSources }) => dataSources.artistsService.create(artist)
    ),
    updateArtist: authWrapper(
      (_, { id, artist }, { dataSources }) => dataSources.artistsService.update(id, artist)
    ),
    deleteArtist: authWrapper(
      (_, { id }, { dataSources }) => dataSources.artistsService.remove(id)
    )
  },
  Artist: {
    bands: ({ bandsIds }, __, { dataSources }) => bandsIds.map((id) => dataSources.bandsService.getById(id)),
  }
}
