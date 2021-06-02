import React from "react";
import { Layout } from "../../layouts/main";
import { Categories } from "./components/categories";
import { Separator } from "./components/separator";
import { Ofertas } from "./components/ofertas";

const ofertasHoy = [
  {
    id: 1,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Familiar, promociones",
    name: "Promo Verano Ming",
    price: 65,
    priceOld: 87,
  },
  {
    id: 2,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "Té para 2",
    price: 24,
    priceOld: 42.4,
  },
  {
    id: 3,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "El té de Ming",
    price: 6,
    priceOld: 11,
  },
];
const ofertasPopulares = [
  {
    id: 4,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Plato a la carta, platos dulces",
    name: "Tipakay",
    price: 22,
  },
  {
    id: 5,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "Tallarín de pollo",
    price: 22,
  },
  {
    id: 6,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "Sajofan",
    price: 22,
  },
];

export function HomeScreen() {
  return (
    <Layout showBanner showDelivery={true} minHeight={500}>
      <Categories />
      <Separator />
      <Ofertas title="Nuestras ofertas de hoy" products={ofertasHoy} />
      <Ofertas title="Los platos más populares" products={ofertasPopulares} />
    </Layout>
  );
}
