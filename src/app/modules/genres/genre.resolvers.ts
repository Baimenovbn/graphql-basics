import { GenresService } from './genres.service';

export const genreResolvers = {
  Query: {
    genres: async () => {
      return GenresService.getAll();
    },

    genre: async (parent, args) => {
      return GenresService.getById(args.id);
    },
  },
  Mutation: {
    createGenre(parent, args) {
      return GenresService.create(args.genre);
    },
    updateGenre(parent, args) {
      return GenresService.update(args.id, args.genre);
    },
    deleteGenre(parent, args) {
      return GenresService.delete(args.id);
    }
  }
}
