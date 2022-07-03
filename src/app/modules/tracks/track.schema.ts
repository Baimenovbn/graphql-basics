import { gql } from 'apollo-server';

export const trackSchema = gql`
  input CreateTrack {
    title: String!
    albumId: String
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }
  
  input UpdateTrack {
    title: String
    albumId: String
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type Track {
    id: ID!
    title: String!
    albums: [Album]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Query {
    tracks: [Track]
    track(id: ID!): Track
  }

  type Mutation {
    updateTrack(id: ID!, genre: UpdateTrack): Track
    createTrack(track: CreateTrack): Track
    deleteTrack(id: ID!): Int
  }
`;
