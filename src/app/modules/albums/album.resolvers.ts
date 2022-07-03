import { AlbumsService } from './albums.service';

export const albumResolvers = {
  Query: {
    async albums() {
      return await AlbumsService.getAll();
    },

    album: async (parent, args) => {
      return AlbumsService.getById(args.id);
    },
  },
  Mutation: {
    createAlbum(parent, args) {
      return AlbumsService.create(args.album);
    },
    updateAlbum(parent, args) {
      const album = args.album;
      const id = args.id;
      return AlbumsService.update(id, album);
    },
    deleteAlbum(parent, args) {
      return AlbumsService.delete(args.id);
    }
  }
}
