import { gql } from 'apollo-server';

export const bandSchema = gql`
  input CreateBand {
    name: String!
    origin: String
    membersId: [String]
    website: String
    genresIds: [String]
  }

  input UpdateBand {
    name: String!
    origin: String
    membersId: [String]
    website: String
    genresIds: [String]
  }

  type Member {
    id: ID!
    artist: Artist
    instrument: String
    years: [String]
  }

  type Band {
      id: ID!
      name: String
      origin: String
      members: [Member]
      website: String
      genres: [Genre]
  }

  extend type Query {
    bands: [Band]
    band(id: ID!): Band
  }

  type Mutation {
    updateBand(id: ID!, genre: UpdateBand): Band
    createBand(band: CreateBand): Band
    deleteBand(id: ID!): Int
  }
`;
