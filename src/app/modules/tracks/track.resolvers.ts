export const trackResolvers = {
  Query: {
    tracks: (_, { pagination }, { dataSources }) => dataSources.tracksService.getAll(pagination),
    track: (_, { id }, { dataSources }) => dataSources.tracksService.getById(id),
  },
  Mutation: {
    createTrack: (_, { track }, { dataSources }) => dataSources.tracksService.create(track),
    updateTrack: (_, { id, track }, { dataSources }) => dataSources.tracksService.update(id, track),
    deleteTrack: (_, { id}, { dataSources }) => dataSources.tracksService.remove(id)
  },
  Track: {
    album: ({ albumId }, _, { dataSources }) => dataSources.albumsService.getById(albumId),
    bands: ({ bandsIds }, _, { dataSources }) => bandsIds.map((id) => dataSources.bandsService.getById(id)),
    artists: ({ artistsIds }, _, { dataSources }) => artistsIds.map((id) => dataSources.artistsService.getById(id)),
    genres: ({ genresIds }, _, { dataSources }) => genresIds.map((id) => dataSources.genresService.getById(id)),
  }
}
