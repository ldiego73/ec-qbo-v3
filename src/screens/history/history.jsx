import React from "react";
import { Link, Redirect, useParams } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../../components";

const HistoryDescription = styled.div`
  width: 100%;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #283342;
  margin-bottom: 60px;
`;

const HistoryTitle = styled.div`
  height: 50px;
  color: black;
  text-align: left;
  font-weight: bold;
`;

const History = () => {
  return (
    <>
      <HistoryTitle>Nuestra Historia</HistoryTitle>
      <HistoryDescription>Texto ... aqui...</HistoryDescription>
    </>
  );
};

export { History };
