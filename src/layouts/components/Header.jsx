import React from "react";
import styled from "styled-components";

import { Container, Content } from "../../components";

const height = 64;

const Wrapper = styled.header`
  background: #ff6038;
  height: ${height}px;
  color: #fff;
  font-weight: bold;
`;

const WrapperHistory = styled.div`
  width: 115px;
  height: 14px;
  left: 200.11px;
  top: 5px;
`;

const WrapperProducts = styled.div`
position: absolute;
width: 143px;
height: 14px;
left: 471px;
top: 27px;
`;

export const Header = () => (
  <Wrapper>
    <Container height={height}>
      <Content align="center">SR. MING</Content>
    </Container>
  </Wrapper>
);
