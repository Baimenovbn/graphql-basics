import { gql } from 'apollo-server';

export const artistSchema = gql`
  input CreateArtist {
    firstName: String!
    secondName: String!
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  input UpdateArtist {
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bandsIds: [String]
    instruments: [String]
  }

  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: String
  }

  type Query {
    artists: [Artist]
    artist(id: ID!): Artist
  }
  
  type Mutation {
    createArtist(artist: CreateArtist): Artist
    deleteArtist(id: ID!): Int
    updateArtist(id: ID!, artist: UpdateArtist): Artist
  }
`;
