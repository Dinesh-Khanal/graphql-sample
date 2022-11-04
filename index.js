//import express from "express";
import { gql, ApolloServer } from "apollo-server";

let users = [
  {
    id: "7783774847847",
    name: "Shailesh",
    email: "shailesh@gmail.com",
    password: "shailesh123",
    role: "user",
  },
  {
    id: "779387848476783",
    name: "Bipin Gyawali",
    email: "bipin@gmail.com",
    password: "gyawali123",
    role: "user",
  },
];

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
    getUser: () => users,
    userCount: () => users.length,
    userByName: (root, args) => {
      return users.find((user) => user.name === args.name);
    },
  },
  Mutation: {
    addUser: (root, args) => {
      const user = {
        ...args,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      users = users.concat(user);
      return user;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen()
  .then(({ url }) => console.log(`server is up and running in ${url}`))
  .catch((error) => console.log(error.message));
