import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Layout } from "../../layouts/main";
import { Sidebar, Products } from "./components";
import { collectionProductsDtoToModels, getProducts } from "./core";

const Content = styled.div`
  display: flex;
  margin-top: 44px;
`;

export function StoreScreen() {
  const [products, setProducts] = useState(undefined);
  const [productsFilters, setProductsFilters] = useState(undefined);
  const [category, setCategory] = useState(0);
  const [name, setName] = useState("");

  const getDefaultCategory = () => {
    const query = new URLSearchParams(window.location.search);

    if (query.has("category")) return parseInt(query.get("category"));

    return 0;
  };

  const callToProducts = async () => {
    const response = await getProducts();

    const products = collectionProductsDtoToModels(response);
    const category = getDefaultCategory();

    setProducts(products);
    setCategory(category);
    filterProducts(products, category);
  };

  function filterProducts(products, categoryId, name) {
    if (!products) return;

    let filterProducts;

    if (categoryId)
      filterProducts = products.filter((p) => p.categoryId === categoryId);
    else filterProducts = [...products];

    if (name) {
      filterProducts = filterProducts.filter(
        (p) => p.name.toLowerCase().indexOf(name.toLowerCase()) > -1
      );
    }

    setProductsFilters(filterProducts);
  }

  function handleCategorySelected(categoryId) {
    setCategory(categoryId);
    filterProducts(products, categoryId, name);
  }

  function handleSearch(name) {
    setName(name);
    filterProducts(products, category, name);
  }

  useEffect(() => {
    callToProducts();
  }, []);

  return (
    <Layout showDelivery>
      <Content>
        <Sidebar
          defaultCategory={category}
          onCategorySelected={handleCategorySelected}
          onSearch={handleSearch}
        />
        {productsFilters && <Products products={productsFilters} />}
      </Content>
    </Layout>
  );
}
