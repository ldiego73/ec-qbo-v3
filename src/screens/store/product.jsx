import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components";

import { Layout } from "../../layouts/main";

const Back = styled(Link)`
  margin-top: 48px;
  margin-bottom: 36px;
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #ff6038;
  text-decoration: none;
`;

const Product = styled.div`
  display: flex;
  margin-bottom: 60px;
`;

const ProductImage = styled.div`
  width: 480px;
  height: 480px;
  object-fit: cover;

  img {
    width: 100%;
    height: 100%;
  }
`;

const ProductInfo = styled.div`
  flex: 1;
  width: 100%;
  margin-left: 80px;
`;

const ProductCategory = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #91979e;
  margin-bottom: 8px;
`;

const ProductName = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;

  color: #283342;
  margin-bottom: 20px;
`;

const ProductDescription = styled.div`
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #283342;
  margin-bottom: 60px;
`;

export function ProductScreen() {
  const params = useParams();

  function isValidProductId() {
    const invalid = isNaN(params.id);

    return !invalid;
  }

  return (
    <Layout>
      {!isValidProductId() && <Redirect to="/" />}
      <Back to="/store">Volver al catálogo</Back>
      <Product>
        <ProductImage>
          <img
            src="https://www.recetasderechupete.com/wp-content/uploads/2016/03/arroz_chaufa.jpg?width=1200&enable=upscale"
            title="Producto"
            loading="lazy"
          />
        </ProductImage>
        <ProductInfo>
          <ProductCategory>Familiar, promociones</ProductCategory>
          <ProductName>Raspadilla de frutas</ProductName>
          <ProductDescription>
            ¿El romantico? Claro que tiene que ser una bebida rojo pasión, el té
            de rosas con fresa ha vuelto en Sr Ming, bebida preparada con mucho
            amor. Miau Ming predice qué tipo de persona eres en el amor: Eres
            Atento y detallista, mandas audios de más de 5 minutos, siempre te
            apareces con un chifita para sorprender, tu promocion favorita es
            Duo Ming
          </ProductDescription>
          <Button>Agregar</Button>
        </ProductInfo>
      </Product>
    </Layout>
  );
}
