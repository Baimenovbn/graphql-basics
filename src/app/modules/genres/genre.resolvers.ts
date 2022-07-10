export const genreResolvers = {
  Query: {
    genres: (_, { pagination }, { dataSources }) => dataSources.genresService.getAll(pagination),
    genre: (_, { id }, { dataSources }) => dataSources.genresService.getById(id),
  },
  Mutation: {
    createGenre: (_, { genre }, { dataSources }) => dataSources.genresService.create(genre),
    updateGenre: (_, { id, genre }, { dataSources }) => dataSources.genresService.update(id, genre),
    deleteGenre: (_, { id, genre }, { dataSources }) => dataSources.genresService.remove(id)
  }
}
