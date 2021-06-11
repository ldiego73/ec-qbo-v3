import React from "react";
import styled from "styled-components";
import { Layout } from "../../layouts/main";
import { Button } from "../../components";

const FinalizarCompraTitle = styled.div`
    font-family: Gilroy;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    color: #283342;
`;

const DetailsTable = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

`;

const Cancelar = styled`
  color: #ff6038;
  text-decoration: none;
`;

const Separador = styled`
    background: #E5E7E8;
    border-radius: 10px;
`;


export function Checkout(orderId, orderDate, customerEmail, totalAmount) {
    return (
        <Layout>
            <FinalizarCompraTitle>Finalizar compra</FinalizarCompraTitle>

            <DetailsTable>
                Número de pedido<br>
                {orderId}

                Fecha<br>
                {orderDate}

                Correo electrónico
                {customerEmail}

                A pagar
                {totalAmount}
            </DetailsTable>

            <Button>Pagar</Button>
            <Cancelar>Cancelar</Cancelar>
        </Layout>
    );
  }