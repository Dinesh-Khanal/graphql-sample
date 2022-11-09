import User from "./models/userModel.js";

const resolvers = {
  Query: {
    getUser: async (root, args) => {
      return User.find();
    },
    userCount: async () => User.collection.countDocuments(),
    userByName: async (root, args) => {
      return User.findOne({ name: args.name });
    },
  },
  Mutation: {
    addUser: async (root, args) => {
      const user = new User({ ...args });
      try {
        await user.save();
      } catch (error) {
        throw new UserInputError(error.message, {
          invalidArgs: args,
        });
      }
      return user;
    },
  },
};

export default resolvers;
