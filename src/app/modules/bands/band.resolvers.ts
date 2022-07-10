import { authWrapper } from '../shared/helpers';

export const bandResolvers = {
  Query: {
    bands: (_, { pagination }, { dataSources }) => dataSources.bandsService.getAll(pagination),
    band: (_, { id }, { dataSources }) => dataSources.bandsService.getById(id),
  },
  Mutation: {
    createBand: authWrapper(
      (_, { band }, { dataSources }) => dataSources.bandsService.create(band)
    ),
    updateBand: authWrapper(
      (_, { band, id }, { dataSources }) => dataSources.bandsService.update(id, band)
    ),
    deleteBand: authWrapper(
      (_, { band, id }, { dataSources }) => dataSources.bandsService.remove(id)
    )
  },
  Band: {
    members: ({ members }, __, { dataSources }) =>
      members.map((member) => dataSources.artistsService.getById(member.artistId))
    ,
    genres: ({ genresIds }, __, { dataSources }) => genresIds.map((id) => dataSources.genresService.getById(id)),
  }
}
