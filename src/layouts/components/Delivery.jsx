import React from "react";
import styled from "styled-components";

import { Container, Content } from "../../components";

const height = 45;

const Wrapper = styled.div`
  background: #283342;
  height: ${height}px;
  color: #fff;
  text-align: center;
  font-weight: bold;
`;

export const Delivery = () => (
  <Wrapper>
    <Container height={height}>
      <Content direction="column" justify="center">
        Delivery a San Miguel, La Perla, Magdalena y Pueblo Libre
      </Content>
    </Container>
  </Wrapper>
);
