import React from "react";
import { BannerImages, Container, Content } from "../components";
import { Footer, Header, Delivery } from "./components";

const images = [
  { url: "https://dolcersf.com/wp-content/uploads/2018/12/dolce-events-1440x300.jpg", title: "Banner 1" },
  { url: "https://www.oregondairy.com/wp-content/uploads/2016/05/Weekly-Specials-Header-1-1440x300.jpg", title: "Banner 2" },
  { url: "https://www.oregondairy.com/wp-content/uploads/2016/05/restaurant-1440x300.jpg", title: "Banner 3" },
];

export const Layout = ({
  children,
  showDelivery = false,
  showBanner = false,
  minHeight,
}) => (
  <>
    <Header />
    {showDelivery && <Delivery />}
    {showBanner && <BannerImages images={images} />}
    <Container>
      <Content direction="column" minHeight={minHeight}>
        {children}
      </Content>
    </Container>
    <Footer />
  </>
);
