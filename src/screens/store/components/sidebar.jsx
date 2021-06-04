import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { getCategories, collectionCategoriesDtoToModels } from "../core";

const SidebarStyled = styled.div`
  width: 280px;
  max-height: 678px;
  background: #fafafa;
  border-radius: 20px;
  padding: 40px 32px;
  margin-bottom: 40px;
  box-sizing: border-box;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 40px;
  color: #283342;
`;

const Search = styled.div`
  margin-top: 28px;
`;

const SearchTitle = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;
  color: #283342;
  margin-bottom: 4px;
`;
const SearchInput = styled.input`
  background: #ffffff;
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;

  width: 100%;

  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.015em;

  color: #91979e;

  outline: none;
  padding: 16px 12px;

  &:hover,
  &:focus,
  &:active {
    border-color: #ff6038;
  }
`;

const Categories = styled.div`
  margin-top: 32px;
`;

const Category = styled.div`
  font-weight: 500;
  font-size: 18px;
  line-height: 18px;
  cursor: pointer;

  color: ${({ selected }) => (selected ? "#FF6038" : "#283342")};

  margin-bottom: 28px;

  &:last-child {
    margin-bottom: 0;
  }
`;

export function Sidebar({ defaultCategory, onCategorySelected, onSearch }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  const callToCategories = async () => {
    const response = await getCategories();

    setCategories(collectionCategoriesDtoToModels(response));
  };

  const handleSelectedCategory = (id) => {
    if (selectedCategory === id) {
      setSelectedCategory(0);
      onCategorySelected(0);
    } else {
      setSelectedCategory(id);
      onCategorySelected(id);
    }
  };

  useEffect(() => {
    callToCategories();
  }, []);

  useEffect(() => {
    setSelectedCategory(defaultCategory);
  }, [defaultCategory]);

  return (
    <SidebarStyled>
      <Title>Nuestros Productos</Title>
      <Search>
        <SearchTitle>Buscar productos</SearchTitle>
        <SearchInput
          type="text"
          placeholder="Nombre del producto"
          onChange={(event) => onSearch(event.target.value)}
        />
      </Search>
      <Categories>
        {categories &&
          categories.map((category) => (
            <Category
              selected={selectedCategory === category.id}
              key={`category-${category.id}`}
              onClick={() => handleSelectedCategory(category.id)}
            >
              {category.name}
            </Category>
          ))}
      </Categories>
    </SidebarStyled>
  );
}
