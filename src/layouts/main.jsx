import React from "react";
import { Container, Content } from "../components";
import { Footer, Header, Delivery } from "./components";

export const Layout = ({ children, showDelivery = false, minHeight }) => (
  <>
    <Header />
    {showDelivery && <Delivery />}
    <Container>
      <Content direction="column" minHeight={minHeight}>
        {children}
      </Content>
    </Container>
    <Footer />
  </>
);
