import React, { useEffect, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";
import { CardProduct } from "../../../components";

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
  const [productsRow, setProductsRow] = useState(null);

  function convertProductsToProductsRow(products) {
    let filterProducts = [];
    let i = 0;

    products.forEach((product, index) => {
      if (index % 3 === 0) {
        filterProducts[i] = [];
      }

      filterProducts[i].push({
        key: `product-${index}`,
        product,
      });

      if (index % 3 === 2) i += 1;
    });

    setProductsRow(filterProducts);
  }

  useEffect(() => {
    convertProductsToProductsRow(products);
  }, [products]);

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
      {productsRow &&
        productsRow.map((items, index) => (
          <ProductRow key={`product-row-${index}`}>
            {items.map(({ key, product }) => (
              <CardProduct
                key={key}
                product={product}
                width={280}
                height={241}
                imageHeight={129}
                onClick={() => setSelectedProduct(product)}
              />
            ))}
          </ProductRow>
        ))}
    </ProductsStyled>
  );
}
