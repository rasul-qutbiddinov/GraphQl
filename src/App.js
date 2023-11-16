// src/App.js
import React from "react";
import "./styles/output.css";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import ProductsPage from "./products";
import CategoriesPage from "./categories";
import ShopsPage from "./shops";
import "./tailwind.css"; // Adjust the path based on your project structure

// Create an Apollo Client instance
const client = new ApolloClient({
  uri: "https://storeling-backend.onrender.com/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <div className="flex flex-wrap">
      <ApolloProvider client={client}>
        <div className="w-full md:w-1/3 p-4">
          {" "}
          {/* Adjust width class for thirds */}
          <ProductsPage />
        </div>
        <div className="w-full md:w-1/3 p-4">
          {" "}
          {/* Adjust width class for thirds */}
          <CategoriesPage />
        </div>
        <div className="w-full md:w-1/3 p-4">
          {" "}
          {/* Adjust width class for thirds */}
          <ShopsPage />
        </div>
      </ApolloProvider>
    </div>
  );
}

export default App;
