import { ArtistsService } from './artists.service';

export const artistResolvers = {
  Query: {
    artists: async () => {
      return ArtistsService.getAll();
    },

    artist: async (parent, args) => {
      return ArtistsService.getById(args.id);
    }
  },
  Mutation: {
    createArtist(parent, args) {
      return ArtistsService.create(args.artist);
    },
    updateArtist(parent, args) {
      return ArtistsService.update(args.id, args.artist);
    },
    deleteArtist(parent, args) {
      return ArtistsService.delete(args.id);
    }
  }
}
