import React, { useEffect, useState } from "react";
import { Layout } from "../../layouts/main";
import { Categories } from "./components/categories";
import { Separator } from "./components/separator";
import { Ofertas } from "./components/ofertas";

import {
  collectionCategoriesDtoToModels,
  collectionOfertasDtoToModel,
  collectionPopularesDtoToModel,
  getCategories,
  getOfertas,
  getPopulares,
} from "./core";

export function HomeScreen() {
  const [ofertas, setOfertas] = useState(null);
  const [populares, setPopulares] = useState(null);
  const [categories, setCategories] = useState(null);

  const callToOfertas = async () => {
    const response = await getOfertas();

    setOfertas(collectionOfertasDtoToModel(response));
  };

  const callToPopulares = async () => {
    const response = await getPopulares();

    setPopulares(collectionPopularesDtoToModel(response));
  };

  const callToCategories = async () => {
    const response = await getCategories();

    setCategories(collectionCategoriesDtoToModels(response));
  };

  useEffect(() => {
    callToOfertas();
    callToPopulares();
    callToCategories();
  }, []);

  return (
    <Layout showBanner showDelivery={true} minHeight={500}>
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
