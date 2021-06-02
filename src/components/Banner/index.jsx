import styled from "styled-components";
import SwipperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";
import "swiper/components/scrollbar/scrollbar.scss";

import "./index.scss";

SwipperCore.use([Navigation, Pagination]);

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
`;

const Image = styled.img`
  width: 100%;
  object-fit: cover;
`;

const Opacity = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.7;
  background: #000;
`;

export const BannerImage = ({ url, title }) => (
  <Wrapper>
    <Image src={url} alt={title} loading="lazy" />
    <Opacity />
  </Wrapper>
);

export const BannerImages = ({ images }) => (
  <Swiper navigation pagination={{ clickable: true }}>
    {images.map(({ url, title }, index) => (
      <SwiperSlide key={`banner-${index}`}>
        <BannerImage url={url} title={title} />
      </SwiperSlide>
    ))}
  </Swiper>
);
