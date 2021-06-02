import React, { useState } from "react";
import { Redirect } from "react-router";
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

const categories = [
  {
    id: 1,
    image: "https://ec-qbo.herokuapp.com/categories/promociones.svg",
    title: "Promociones",
  },
  {
    id: 2,
    image: "https://ec-qbo.herokuapp.com/categories/dim-sum.svg",
    title: "Dim Sum",
  },
  {
    id: 3,
    image: "https://ec-qbo.herokuapp.com/categories/sopas.svg",
    title: "Sopas",
  },
  {
    id: 4,
    image: "https://ec-qbo.herokuapp.com/categories/bebidas.svg",
    title: "Bebidas",
  },
  {
    id: 5,
    image: "https://ec-qbo.herokuapp.com/categories/platos-dulces.svg",
    title: "Platos Dulces",
  },
  {
    id: 6,
    image: "https://ec-qbo.herokuapp.com/categories/platos-salados.svg",
    title: "Platos Salados",
  },
  {
    id: 7,
    image: "https://ec-qbo.herokuapp.com/categories/a-la-carta.svg",
    title: "A la Carta",
  },
  {
    id: 8,
    image: "https://ec-qbo.herokuapp.com/categories/familiar.svg",
    title: "Familiar",
  },
];

export function Categories() {
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
          <Title>{item.title}</Title>
        </CategoryIcon>
      ))}
    </Wrapper>
  );
}
