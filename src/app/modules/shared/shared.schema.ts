import { gql } from 'apollo-server';

export const sharedSchema = gql`
  input PaginatedRequest {
    limit: Int
    offset: Int
  }
`;
