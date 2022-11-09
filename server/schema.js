import { gql } from "apollo-server";

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
export default typeDefs;
