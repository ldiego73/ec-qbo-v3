import React, { useReducer } from "react";
import styled from "styled-components";
import { Layout } from "../../layouts/main";
import { Sidebar, Products } from "./components";
import { useProducts } from "./hooks";
import { reducer, initialState, StoreActions } from "./reducers";

const Content = styled.div`
  display: flex;
  margin-top: 44px;
`;

export function StoreScreen() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const products = useProducts(state.category, state.name);

  function handleCategorySelected(categoryId) {
    dispatch({ type: StoreActions.SelectCategory, category: categoryId });
  }

  function handleSearch(name) {
    dispatch({ type: StoreActions.SetName, name });
  }

  return (
    <Layout showDelivery>
      <Content>
        <Sidebar
          defaultCategory={state.category}
          onCategorySelected={handleCategorySelected}
          onSearch={handleSearch}
        />
        {products && <Products products={products} />}
      </Content>
    </Layout>
  );
}
