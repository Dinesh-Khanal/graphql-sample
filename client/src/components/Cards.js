import React from "react";
import styled from "styled-components";

const Card = styled.div`
  width: 250px;
  border-radius: 6px;
  box-shadow: 3px 3px 6px 2px #ccc;
  margin: 10px;
  padding: 15px;
  color: blue;
  border: none;
  cursor: pointer;
`;
const Cards = ({ user }) => {
  const { name, email, role } = user;
  return (
    <Card>
      <h2>{name}</h2>
      <p>Email: {email}</p>
      <p>Role: {role}</p>
    </Card>
  );
};

export default Cards;
