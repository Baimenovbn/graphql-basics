import { gql } from 'apollo-server';

export const albumSchema = gql`
  input CreateAlbum {
    name: String!
    released: Int
    artistsIds: [ID!]
    bandsIds: [ID!]
    trackIds: [ID!]
    genresIds: [ID!]
    image: String
  }

  input UpdateAlbum {
    name: String
    released: Int
    artistsIds: [ID!]
    bandsIds: [ID!]
    trackIds: [ID!]
    genresIds: [ID!]
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

  type Albums {
    offset: Int
    limit: Int
    total: Int
    items: [Album]
  }

  type Query {
    albums(pagination: PaginatedRequest): Albums
    album(id: ID!): Album
  }

  type Mutation {
    updateAlbum(id: ID!, album: UpdateAlbum): Album
    createAlbum(album: CreateAlbum): Album
    deleteAlbum(id: ID!): Boolean
  }
`;
