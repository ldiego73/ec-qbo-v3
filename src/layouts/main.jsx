import React, { useEffect, useState } from "react";
import { BannerImages, Container, Content } from "../components";
import { Footer, Header, Delivery } from "./components";
import { collectionBannersDtoToModels, getBanners } from "./core";

export function Layout({
  children,
  showDelivery = false,
  showBanner = false,
  minHeight,
}) {
  const [images, setImages] = useState([]);

  const callToBanners = async () => {
    const response = await getBanners();

    return setImages(collectionBannersDtoToModels(response));
  };

  useEffect(() => {
    callToBanners();
  }, []);

  return (
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
}
