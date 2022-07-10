import { gql } from 'apollo-server';

export const genreSchema = gql`
  input CreateGenre {
    name: String!
    description: String
    country: String
    year: String
  }

  input UpdateGenre {
    name: String
    description: String
    country: String
    year: String
  }

  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type Genres {
    offset: Int
    limit: Int
    total: Int
    items: [Genre]
  }
  
  type Query {
    genres(pagination: PaginatedRequest): Genres
    genre(id: ID!): Genre
  }

  type Mutation {
    updateGenre(id: ID!, genre: UpdateGenre): Genre
    createGenre(genre: CreateGenre): Genre
    deleteGenre(id: ID!): Boolean
  }
`;
