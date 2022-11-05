//import express from "express";
import { gql, ApolloServer } from "apollo-server";
import dotenv from "dotenv";
import connectDb from "./config/dbConnection.js";
import User from "./models/userModel.js";

if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "./server/config/config.env" });
}
connectDb();
// let users = [
//   {
//     id: "7783774847847",
//     name: "Shailesh",
//     email: "shailesh@gmail.com",
//     password: "shailesh123",
//     role: "user",
//   },
//   {
//     id: "779387848476783",
//     name: "Bipin Gyawali",
//     email: "bipin@gmail.com",
//     password: "gyawali123",
//     role: "user",
//   },
// ];

const typeDefs = gql`
  type Query {
    getUser: [User]
    userCount: Int
    userByName(name: String!): User
  }
  type User {
    id: ID!
    name: String!
    email: String!
    password: String
    role: String
  }
  type Mutation {
    addUser(name: String!, email: String!, password: String, role: String): User
  }
`;
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

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen()
  .then(({ url }) => console.log(`server is up and running in ${url}`))
  .catch((error) => console.log(error.message));
