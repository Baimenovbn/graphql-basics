import { gql } from 'apollo-server';

export const bandSchema = gql`
  input CreateBand {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID!]
  }

  input UpdateBand {
    name: String!
    origin: String
    members: [MemberInput]
    website: String
    genresIds: [ID!]
  }

  type Member {
    artistId: ID!
    instrument: String
    years: [String]
  }

  input MemberInput {
    artistId: ID!
    instrument: String!
    years: [String!]!
  }

  type Band {
    _id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }

  type Bands {
    offset: Int
    limit: Int
    total: Int
    items: [Band]
  }
  
  type Query {
    bands(pagination: PaginatedRequest): Bands
    band(id: ID!): Band
  }

  type Mutation {
    updateBand(id: ID!, genre: UpdateBand): Band
    createBand(band: CreateBand): Band
    deleteBand(id: ID!): Boolean
  }
`;
