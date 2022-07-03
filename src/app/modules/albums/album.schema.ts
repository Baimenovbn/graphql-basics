import { gql } from 'apollo-server';

export const albumSchema = gql`
  input CreateAlbum {
    name: String!
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }

  input UpdateAlbum {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }

  type Album {
    _id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }

  type Query {
    albums: [Album]
    album(id: ID!): Album
  }

  type Mutation {
    updateAlbum(id: ID!, album: UpdateAlbum): Album
    createAlbum(album: CreateAlbum): Album
    deleteAlbum(id: ID!): Int
  }
`;
