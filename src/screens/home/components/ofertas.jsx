import React, { useContext, useState } from "react";
import { Redirect } from "react-router";
import styled from "styled-components";

import { CardProduct } from "../../../components";
import { EcommerceContext } from "../../../contexts";

const OfertaContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 112px;
`;

const OfertaHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 32px;
`;

const OfertaTitle = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #283342;
`;

const OfertaLink = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #ff6038;
  cursor: pointer;
`;

const OfertaProducts = styled.div`
  display: flex;
  justify-content: space-between;
`;

export function Ofertas({ products, title }) {
  const [catalogoCompleto, setCatalogoCompleto] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(EcommerceContext);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddProduct = (product) => {
    addToCart(product);
  };

  return (
    <OfertaContent>
      {catalogoCompleto && <Redirect to="/store" />}
      {selectedProduct && (
        <Redirect to={{ pathname: `/product/${selectedProduct.id}` }} />
      )}
      <OfertaHeader>
        <OfertaTitle>{title}</OfertaTitle>
        <OfertaLink onClick={() => setCatalogoCompleto(true)}>
          Ver catálogo completo
        </OfertaLink>
      </OfertaHeader>
      <OfertaProducts>
        {products.map((product, index) => (
          <CardProduct
            product={product}
            onClick={handleProductClick}
            onAddProduct={handleAddProduct}
          />
        ))}
      </OfertaProducts>
    </OfertaContent>
  );
}
