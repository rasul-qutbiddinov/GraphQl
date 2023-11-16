// src/ProductsPage.js
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Product } from "../models/Product";

// Define the GraphQL query
const GET_PRODUCTS = gql`
  query {
    products {
      data {
        description {
          language
          value
        }
        name {
          language
          value
        }
      }
    }
  }
`;

const ProductsPage = () => {
  // Use the useQuery hook to fetch data from the GraphQL endpoint
  const { loading, error, data } = useQuery(GET_PRODUCTS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error.message);
    return <p>Error fetching data</p>;
  }

  // Log the received data structure
  console.log("GraphQL Data:", data);

  // Extract product data from the response and map it to the Product model
  const products = data.products.data.map(
    (product) =>
      new Product(product.name[0].value, product.description[0].value)
  );

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product, index) => (
          <li key={index}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;
