import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin-top: 40px;
  margin-bottom: 20px;
`;

const CategoryIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  cursor: pointer;
`;

const Circle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #f0f0f0;
  margin-bottom: 12px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: #283342;
`;

export function Categories({ categories }) {
  const [category, setCategory] = useState(null);

  return (
    <Wrapper>
      {category && (
        <Redirect
          to={{ pathname: "/store", search: `category=${category.id}` }}
        />
      )}
      {categories.map((item, index) => (
        <CategoryIcon
          key={`category-${index}`}
          onClick={() => setCategory(item)}
        >
          <Circle>
            <img src={item.image} alt={item.title} loading="lazy" />
          </Circle>
          <Title>{item.name}</Title>
        </CategoryIcon>
      ))}
    </Wrapper>
  );
}
