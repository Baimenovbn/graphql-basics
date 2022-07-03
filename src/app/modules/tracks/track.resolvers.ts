import { TracksService } from './tracks.service';

export const trackResolvers = {
  Query: {
    tracks: async () => {
      return TracksService.getAll();
    },

    track: async (parent, args) => {
      return TracksService.getById(args.id);
    },
  },
  Mutation: {
    createTrack(parent, args) {
      return TracksService.create(args.track);
    },
    updateTrack(parent, args) {
      return TracksService.update(args.id, args.track);
    },
    deleteTrack(parent, args) {
      return TracksService.delete(args.id);
    }
  }
}
