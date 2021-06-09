import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container, Content } from "../../components";
import { EcommerceContext } from "../../contexts";
import { formatCurrency } from "../../helpers";

const height = 64;

const Wrapper = styled.header`
  background: #ff6038;
  height: ${height}px;
  color: #fff;
  font-weight: bold;
`;

const Title = styled(Link)`
  font-size: 24px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  cursor: pointer;
  text-decoration: none;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
  }
`;

const HeaderLinks = styled.div`
  margin-left: 80px;
`;

const HeaderLink = styled(LinkWrapper)`
  padding: 16px 40px;
  font-weight: 500;
  font-size: 16px;
  line-height: 14px;
`;

const HeaderActions = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

const ActionCart = styled(LinkWrapper)`
  margin-right: 32px;
`;

const ActionLogin = styled(LinkWrapper)`
  margin-left: 32px;
`;

const Separator = styled.span`
  display: inline-flex;
  width: 2px;
  background: #fff;
  height: 28px;
`;

const links = [
  {
    title: "Nuestra historia",
    to: "/history",
  },
  {
    title: "Nuestros productos",
    to: "/store",
  },
];

export function Header() {
  const { cart } = useContext(EcommerceContext);

  function getTotal() {
    const neto = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    return formatCurrency(neto);
  }

  return (
    <Wrapper>
      <Container height={height}>
        <Content align="center">
          <Title to="/">SR. MING</Title>
          <HeaderLinks>
            {links.map(({ title, to }, index) => (
              <HeaderLink key={`header-${index}`} to={to}>
                {title}
              </HeaderLink>
            ))}
          </HeaderLinks>
          <HeaderActions>
            <ActionCart to="/cart">{getTotal()}</ActionCart>
            <Separator />
            <ActionLogin to="/oauth/login">Inicia sesión</ActionLogin>
          </HeaderActions>
        </Content>
      </Container>
    </Wrapper>
  );
}
