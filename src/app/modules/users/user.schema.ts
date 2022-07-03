import { gql } from 'apollo-server';

export const userSchema = gql`
  input CreateUser {
    firstName: String!
    lastName: String!
    password: String!
    email: String!
  }

  type JWT {
    jwt: String!
  }

  type User {
    _id: ID!
    firstName: String
    lastName: String
    password: String
    email: String!
  }

  type Query {
    user(id: ID!): User
  }

  type Mutation {
    register(user: CreateUser): User
    jwt(email: String!, password: String!): JWT
  }
`;
