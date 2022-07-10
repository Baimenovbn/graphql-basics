export const userResolvers = {
  Query: {
    user: (_, { id }, { dataSources }) => dataSources.usersService.getById(id),
    jwt: (_, { email, password }, { dataSources }) => dataSources.usersService.login(email, password),
  },
  Mutation: {
    register: (_, { user }, { dataSources }) => dataSources.usersService.register(user),
  }
}
