import { gql } from 'apollo-server';

export const artistSchema = gql`
  input CreateArtist {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [ID!]
    instruments: [String]
  }

  input UpdateArtist {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [ID!]
    instruments: [String]
  }

  type Artist {
    _id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }

  type Artists {
    offset: Int
    limit: Int
    total: Int
    items: [Artist]
  }

  type Query {
    artists(pagination: PaginatedRequest): Artists
    artist(id: ID!): Artist
  }

  type Mutation {
    createArtist(artist: CreateArtist): Artist
    updateArtist(id: ID!, artist: UpdateArtist): Artist
    deleteArtist(id: ID!): Boolean
  }
`;
