import { gql } from 'apollo-server';

export const favouriteSchema = gql`
  input AddToFavourites {
    type: String
    id: ID!
  }

  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }

  type Query {
    favourites: [Favourites]
  }

  type Mutation {
    addTrackToFavourites(addToFavourites: AddToFavourites): Favourites
    addBandToFavourites(addToFavourites: AddToFavourites): Favourites
    addArtistToFavourites(addToFavourites: AddToFavourites): Favourites
    addGenreToFavourites(addToFavourites: AddToFavourites): Favourites
  }
`;
