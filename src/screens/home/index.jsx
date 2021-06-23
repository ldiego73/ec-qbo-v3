import React from "react";
import { Layout } from "../../layouts/main";
import { Categories } from "./components/categories";
import { Separator } from "./components/separator";
import { Ofertas } from "./components/ofertas";

import { useCategories, useOfertas, usePopulares } from "./hooks";

export function HomeScreen() {
  const ofertas = useOfertas();
  const populares = usePopulares();
  const categories = useCategories();

  return (
    <Layout showBanner showDelivery minHeight={500}>
      {categories && <Categories categories={categories} />}
      <Separator />
      {ofertas && (
        <Ofertas title="Nuestras ofertas de hoy" products={ofertas} />
      )}
      {populares && (
        <Ofertas title="Los platos más populares" products={populares} />
      )}
    </Layout>
  );
}
