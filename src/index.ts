import { ApolloServer } from 'apollo-server';

import 'dotenv/config';

import { DEFAULT_PORT } from './app/constants';
import { typeDefs } from './app/modules/type-defs';
import { resolvers } from './app/modules/resolvers';
import { dataSources } from './app/modules/data-sources';
import { UsersService } from './app/modules/users/users.service';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: 'bounded',
  dataSources,
  context: async ({ req }) => {
    let user;
    let errorMessage= '';
    const token = req.headers.authorization || '';

    try {
      const res = await UsersService.verify(token)
      user = res.data;
    } catch (e) {
      errorMessage = (e as unknown as { message: string }).message ;
    }

    return { user, errorMessage, token };
  },
});

server.listen(process.env.PORT || DEFAULT_PORT).then(({url}) => {
  console.log(`Server is running on ${url}`);
});
