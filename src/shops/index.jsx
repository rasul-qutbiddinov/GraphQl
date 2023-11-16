// src/CategoriesPage.js
import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Product } from "../models/Product";

// Define the GraphQL query
const GET_SHOPS = gql`
  query {
    shops {
      data {
        location
        address
        name
      }
    }
  }
`;

const ShopsPage = () => {
  // Use the useQuery hook to fetch data from the GraphQL endpoint
  const { loading, error, data } = useQuery(GET_SHOPS);

  if (loading) return <p>Loading...</p>;
  if (error) {
    console.error("GraphQL Error:", error.message);
    return <p>Error fetching data</p>;
  }

  // Log the received data structure
  console.log("GraphQL Data:", data);

  // Extract shop data from the response and map it to the Product model
  const shops = data.shops.data.map(
    (shop) => new Product(shop.name, `${shop.location} - ${shop.address}`)
  );

  return (
    <div>
      <h1>Shops</h1>
      <ul>
        {shops.map((shop, index) => (
          <li key={index}>
            <h3>{shop.name}</h3>
            <p>{shop.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShopsPage;
