import React from "react";
import styled from "styled-components";

import { Container, Content } from "../../components";

const height = 124;
const nameLogo = "SR. MING";
const Wrapper = styled.footer`
  background: #283342;
  height: ${height}px;
  color: #fff;
`;

const FooterContainer = styled.div``;

const FooterLogo = styled.div`
  font-size: 24px;
  line-height: 28px;
`;

const FooterCopyright = styled.div`
  font-family: Gilroy;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #91979e;
`;
const FooterDivider = styled.div`
  border: 1px solid #91979e;
  height: 1px;
`;

export const Footer = () => (
  <Wrapper>
    <Container height={height}>
      <Content direction="column" justify="center">
        <FooterContainer>
          <FooterLogo> {nameLogo} </FooterLogo>
          <FooterDivider />
          <FooterCopyright>
            © {new Date().getFullYear()} SR. MING
          </FooterCopyright>
        </FooterContainer>
      </Content>
    </Container>
  </Wrapper>
);
