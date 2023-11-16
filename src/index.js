// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ProductsPage from "./products";
import CategoriesPage from "./categories";
import ShopsPage from "./shops";

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: "https://storeling-backend.onrender.com/graphql", // Replace with your GraphQL endpoint
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <ProductsPage />
    <ShopsPage />
    <CategoriesPage />
  </ApolloProvider>,
  document.getElementById("root")
);
