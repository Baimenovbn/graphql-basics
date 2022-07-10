export const authWrapper = (cb) => async (parent, args, context, info) => {
    if (!context.user) return null;

    return await cb(parent, args, context, info);
  };
