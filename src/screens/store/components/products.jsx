import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { CardProduct } from "../../../components";
import { EcommerceContext } from "../../../contexts";

const ProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin-left: 40px;
`;

const ProductRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export function Products({ products }) {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(EcommerceContext);

  function handleAddProduct(product) {
    addToCart(product);
  }

  if (selectedProduct)
    return (
      <Redirect
        to={{
          pathname: `product/${selectedProduct.id}`,
        }}
      />
    );

  return (
    <ProductsStyled>
      {products &&
        products.map((items, index) => (
          <ProductRow key={`product-row-${index}`}>
            {items.map(({ key, product }) => (
              <CardProduct
                key={key}
                product={product}
                width={280}
                height={241}
                imageHeight={129}
                onClick={() => setSelectedProduct(product)}
                onAddProduct={() => handleAddProduct(product)}
              />
            ))}
          </ProductRow>
        ))}
    </ProductsStyled>
  );
}
