import { gql, useMutation } from "@apollo/client";
import React from "react";

const CREATE_PRODUCT = gql`
  mutation CreateProduct($name: String!, $quantityPerUnit: Int!) {
    createProduct(record: { name: $name, quantityPerUnit: "3" }) {
      record {
        name
      }
    }
  }
`;
export default function Mutation() {
  const [createProduct, { data, loading, error }] = useMutation(
    CREATE_PRODUCT,
    {
      variables: {
        name: "hotdog",
        quantityPerUnit: 3,
      },
    }
  );
  return (
    <div>
      <button onClick={() => createProduct()}>Add Product</button>
    </div>
  );
}
