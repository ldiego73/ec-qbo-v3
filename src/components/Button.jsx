import React from "react";
import styled from "styled-components";

export const Wrapper = styled.button`
  padding: 11px 28px;
  width: auto;
  height: 40px;
  font-weight: bold;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  text-align: center;

  outline: none;
  border: none;

  background: #ff6038;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.05);
  border-radius: 20px;
  box-sizing: border-box;
  cursor: pointer;
`;

export const Button = ({ type = "button", testId, children, onClick }) => {
  const handleClick = () => {
    typeof onClick === "function" && onClick();
  };

  return (
    <Wrapper type={type} onClick={handleClick} data-testid={testId || "button"}>
      {children}
    </Wrapper>
  );
};
