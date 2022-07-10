import { AlbumsService } from './albums/albums.service';
import { ArtistsService } from './artists/artists.service';
import { BandsService } from './bands/bands.service';
import { FavouritesService } from './favourites';
import { GenresService } from './genres/genres.service';
import { TracksService } from './tracks/tracks.service';
import { UsersService } from './users/users.service';

export const dataSources = () => ({
  albumsService: new AlbumsService(),
  artistsService: new ArtistsService(),
  bandsService: new BandsService(),
  favouritesService: new FavouritesService(),
  genresService: new GenresService(),
  tracksService: new TracksService(),
  usersService: new UsersService()
})
