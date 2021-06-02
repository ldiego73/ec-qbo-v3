import React from "react";
import styled from "styled-components";

import { Button } from "../Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? `${width}px` : "380px")};
  height: ${({ height }) => (height ? `${height}px` : "312px")};
`;

const Image = styled.img`
  border-radius: 8px;
  width: ${({ width }) => (width ? `${width}px` : "380px")};
  height: ${({ height }) => (height ? `${height}px` : "200px")};
  object-fit: cover;
  cursor: pointer;
  margin-bottom: 16px;
`;

const Header = styled.div`
  display: flex;
  margin-bottom: 4px;
`;

const HeaderTitle = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #91979e;
`;

const Body = styled.div`
  display: flex;
  margin-bottom: 16px;
`;

const BodyTitle = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
`;

const PriceOld = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  text-decoration-line: line-through;

  color: #91979e;
`;

const Price = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  color: #283342;
`;

const Footer = styled.div`
  display: flex;
`;

export function CardProduct({
  product,
  width,
  height,
  imageHeight,
  onClick,
  onAddProduct,
}) {
  const handleClick = () => {
    typeof onClick === "function" && onClick(product);
  };

  const handleAddProduct = () => {
    typeof onAddProduct === "function" && onAddProduct(product);
  };

  return (
    <Wrapper width={width} height={height}>
      <Image
        src={product.image}
        loading="lazy"
        width={width}
        height={imageHeight}
        onClick={handleClick}
      />
      <Header>
        <HeaderTitle>{product.category}</HeaderTitle>
        {product.priceOld && <PriceOld>S/. {product.priceOld}</PriceOld>}
      </Header>
      <Body>
        <BodyTitle>{product.name}</BodyTitle>
        <Price>S/. {product.price}</Price>
      </Body>
      <Footer>
        <Button onClick={handleAddProduct}>Agregar</Button>
      </Footer>
    </Wrapper>
  );
}
