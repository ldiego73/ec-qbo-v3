import React from "react";
import { useParams } from "react-router-dom";

export function ProductScreen() {
  const params = useParams();

  return <h1>Product ID #{params.id}</h1>;
}
