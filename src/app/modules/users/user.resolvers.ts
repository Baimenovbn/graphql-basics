import {UsersService} from './users.service';

export const userResolvers = {
  Query: {
    async user(parent, args) {
      return await UsersService.findById(args.id);
    },

  },
  Mutation: {
    async register(parent, args) {
      return await UsersService.register(args.user);
    },

    async jwt(parent, args) {
      return UsersService.jwt(args.email, args.password);
    }
  }
}
