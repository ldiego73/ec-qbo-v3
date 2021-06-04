import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components";

const HistoryContent = styled.div`
  display: flex;
  margin-top: 68px;
  margin-bottom: 300px;
`;

const HistoryInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 80px;
`;

const HistoryTitle = styled.div`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #283342;
  margin-bottom: 20px;
`;

const HistoryDescription = styled.div`
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #283342;
`;

const HistoryImage = styled.div`
  border-radius: 32px;
  width: 640px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 32px;
  }
`;

const History = () => {
  return (
    <HistoryContent>
      <HistoryInfo>
        <HistoryTitle>Nuestra Historia</HistoryTitle>
        <HistoryDescription>
          Fundada por una familia de origen Hongkonés que en el 2008 deciden
          crear Sr Ming, un restaurante y salón de té especializado en comida
          oriental más conocido como “chifa” en Perú. 
          <br /><br />
          Está ubicado en San Miguel
          y lleva 12 años en el mercado ofreciendo los productos más frescos con
          la rapidez que los caracteriza, brindado un ambiente hogareño a cada
          cliente que confía en nosotros. 
          <br /><br />
          Nuestro compromiso es siempre
          ofrecerles la mejor experiencia, es por ello que innovamos
          constantemente nuestros platillos y bebidas. Sr Ming los invita a
          disfrutar del verdadero sabor oriental.
        </HistoryDescription>
      </HistoryInfo>
      <HistoryImage>
        <img
          src="https://lh3.googleusercontent.com/proxy/Et68iXAbIpfBeZFkMmSeAwEroRyVAPpac9cF2VOI3EULUfOqVko04S0mDqyzWQBN-J8LzNV-YE2kM4yOkJf2JCqGxl9qxA"
          alt="Nuestra Historia"
          loading="lazy"
        />
      </HistoryImage>
    </HistoryContent>
  );
};

export { History };
