import React from "react";

import { gql, useQuery } from "@apollo/client";
import Card from "../components/Cards";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
const USERS = gql`
  query getUserData {
    getUser {
      id
      name
      email
      role
    }
  }
`;

const Home = () => {
  const { loading, error, data } = useQuery(USERS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  return (
    <Container>
      <h2>Sample Apolo Server Application</h2>
      <Cards>
        {data?.getUser?.map((user) => (
          <Card key={user.id} user={user} />
        ))}
      </Cards>
    </Container>
  );
};

export default Home;
