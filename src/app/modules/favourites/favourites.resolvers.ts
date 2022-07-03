import { FavouritesService } from './favourites.service';

export const favouritesResolvers = {
  Query: {
    favourites() {
      return FavouritesService.getAll();
    }
  },
  Mutation: {
    addTrackToFavourites(parent, args) {
      return FavouritesService.addToFavourites(args.id,'tracks')
    },
    addBandToFavourites(parent, args) {
      return FavouritesService.addToFavourites(args.id,'bands')
    },
    addArtistToFavourites(parent, args) {
      return FavouritesService.addToFavourites(args.id,'artists')
    },
    addGenreToFavourites(parent, args) {
      return FavouritesService.addToFavourites(args.id,'genres')
    },
  }
}
