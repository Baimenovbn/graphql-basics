import { gql } from 'apollo-server';

export const trackSchema = gql`
  input CreateTrack {
    title: String!
    albumId: ID
    bandsIds: [ID!]
    artistsIds: [ID!]
    duration: Int
    released: Int
    genresIds: [ID!]
  }
  
  input UpdateTrack {
    title: String
    albumId: ID
    bandsIds: [ID!]
    duration: Int
    released: Int
    genresIds: [ID!]
  }

  type Track {
    _id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }

  type Tracks {
    offset: Int
    limit: Int
    total: Int
    items: [Track]
  }
  
  type Query {
    tracks(pagination: PaginatedRequest): Tracks
    track(id: ID!): Track
  }

  type Mutation {
    updateTrack(id: ID!, track: UpdateTrack): Track
    createTrack(track: CreateTrack): Track
    deleteTrack(id: ID!): Boolean
  }
`;
