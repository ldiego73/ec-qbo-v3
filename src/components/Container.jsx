import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  width: auto;
  height: ${({ height }) => (height ? `${height}px` : "auto")};

  @media screen and (max-width: 768px) {
    max-width: auto;
    width: 100%;
  }
`;

export const Container = ({ children, height }) => (
  <Wrapper height={height}>{children}</Wrapper>
);
