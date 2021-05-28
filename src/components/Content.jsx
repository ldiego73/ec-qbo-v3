import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "auto"};
  width: 100%;
  padding: 0 16px;

  ${({ align }) => (align ? `align-items: ${align};` : "")}
  ${({ justify }) => (justify ? `justify-content: ${justify};` : "")}
  ${({ minHeight }) => (minHeight ? `min-height: ${minHeight}px;` : "")}
`;

export const Content = ({ direction, align, justify, minHeight, children }) => (
  <Wrapper
    direction={direction}
    align={align}
    justify={justify}
    minHeight={minHeight}
  >
    {children}
  </Wrapper>
);
