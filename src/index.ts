import { ApolloServer } from 'apollo-server';

import 'dotenv/config';

import { DEFAULT_PORT } from './app/constants';
import { typeDefs } from './app/modules/type-defs';
import { resolvers } from './app/modules/resolvers';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  context: ({ req }) => {
    const token = req.headers.authorization || '';

    console.log('I AM TOKEN', token);
    const user = '';

    return { user };
  }
});

server.listen(process.env.PORT || DEFAULT_PORT).then(({url}) => {
  console.log(`Server is running on ${url}`);
});
