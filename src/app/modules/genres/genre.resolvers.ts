import { authWrapper } from '../shared/helpers';

export const genreResolvers = {
  Query: {
    genres: (_, { pagination }, { dataSources }) => dataSources.genresService.getAll(pagination),
    genre: (_, { id }, { dataSources }) => dataSources.genresService.getById(id),
  },
  Mutation: {
    createGenre: authWrapper(
      (_, { genre }, { dataSources }) => dataSources.genresService.create(genre)
    ),
    updateGenre: authWrapper(
      (_, { id, genre }, { dataSources }) => dataSources.genresService.update(id, genre)
    ),
    deleteGenre: authWrapper(
      (_, { id, genre }, { dataSources }) => dataSources.genresService.remove(id)
    ),
  }
}
