import { Body } from 'apollo-datasource-rest/dist/RESTDataSource';

export const authWrapper = (cb) => async (parent, args, context, info) => {
    if (!context.user) return null;

    return await cb(parent, args, context, info);
  };

export const toPlainObject = (obj: object) => {
  return {...obj} as Body;
}
