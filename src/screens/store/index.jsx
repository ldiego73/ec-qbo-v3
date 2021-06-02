import React from "react";
import styled from "styled-components";
import { Layout } from "../../layouts/main";
import { Ofertas } from "../home/components/ofertas";
import { Sidebar } from "./components/sidebar";

const ofertasList = [
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
    price: 65,
    priceOld: 87,
  },
  {
    id: 3,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "El té de Ming",
    price: 65,
    priceOld: 87,
  },
  {
    id: 4,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Familiar, promociones",
    name: "Promo Verano Ming",
    price: 65,
    priceOld: 87,
  },
  {
    id: 5,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "Té para 2",
    price: 65,
    priceOld: 87,
  },
  {
    id: 6,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "El té de Ming",
    price: 65,
    priceOld: 87,
  },

  {
    id: 7,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Familiar, promociones",
    name: "Promo Verano Ming",
    price: 65,
    priceOld: 87,
  },
  {
    id: 8,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "Té para 2",
    price: 65,
    priceOld: 87,
  },
  {
    id: 9,
    image:
      "https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale",
    category: "Bebidas, promociones",
    name: "El té de Ming",
    price: 65,
    priceOld: 87,
  },
];

const ContainerStore = styled.div`
  display: flex;
`;

const SidebarContent = styled.div`
  width: 280px;
  height: 678px;
`;

const StoreList = styled.div`
  width: 960px;
  height: 678px;
`;

export function StoreScreen() {
  return (
    <Layout>
      <ContainerStore>
        <SidebarContent>
          <Sidebar />
        </SidebarContent>
        <StoreList>
          <Ofertas title="" products={ofertasList} />
        </StoreList>
      </ContainerStore>
    </Layout>
  );
}
