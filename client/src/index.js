import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Page from "./pages";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router } from "react-router-dom";

const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <ApolloProvider client={client}>
      <Page />
    </ApolloProvider>
  </Router>
);
