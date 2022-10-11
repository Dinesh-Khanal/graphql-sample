//import express from "express";
import { gql, ApolloServer } from "apollo-server";

const typeDefs = gql`
  type Query {
    getUser: [User]
  }
  type User {
    id: ID!
    name: String
    age: Int
    office: String
  }
`;
const mocks = {
  Query: () => ({
    getUser: () => [...new Array(6)],
  }),
  User: () => ({
    name: () => "Shailesh",
    age: () => 30,
    office: () => "Nimble infosis",
  }),
};

const server = new ApolloServer({ typeDefs, mocks });
server
  .listen()
  .then(() => console.log("server is up and running on port 4000"));
