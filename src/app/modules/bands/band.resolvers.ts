import { BandsService } from './bands.service';

export const bandResolvers = {
  Query: {
    bands: async () => {
      return BandsService.getAll();
    },

    band: async (parent, args) => {
      return BandsService.getById(args.id);
    },
  },
  Mutation: {
    createBand(parent, args) {
      return BandsService.create(args.band);
    },
    updateBand(parent, args) {
      return BandsService.update(args.id, args.band);
    },
    deleteBand(parent, args) {
      return BandsService.delete(args.id);
    }
  }
}
