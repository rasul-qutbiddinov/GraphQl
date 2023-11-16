// src/ProductsPage.js
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Product } from "../models/Product";

// Define the GraphQL query
const GET_CATEGORIES = gql`
  query {
    categories {
      data {
        name {
          language
          value
          id
        }
      }
    }
  }
`;

const CategoriesPage = () => {
  // Use the useQuery hook to fetch data from the GraphQL endpoint
  const { loading, error, data } = useQuery(GET_CATEGORIES);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error.message);
    return <p>Error fetching data</p>;
  }

  // Log the received data structure
  console.log("GraphQL Data:", data);

  // Extract category data from the response and map it to the Product model
  const categories = data.categories.data.map(
    (category) => new Product(category.name[0].value, category.name[0].id)
  );

  return (
    <div>
      <h1>Categories</h1>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>
            <h3>{category.name}</h3>
            <p>ID: {category.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesPage;
