import React, { useContext, useState } from "react";
import CounterInput from "react-counter-input";
import styled from "styled-components";
import { Accordion, Button } from "../../components";
import { EcommerceContext } from "../../contexts";
import { formatCurrency } from "../../helpers";
import { Layout } from "../../layouts/main";

const CartContent = styled.div`
  margin-top: 60px;
`;

const CartTitle = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 36px;
  color: #283342;
`;

const CartWrapper = styled.div`
  display: flex;
  margin-top: 36px;
  margin-bottom: 134px;
  width: 100%;
`;

const CartProducts = styled.div`
  flex: 1;
  border-radius: 28px;
  background: #fff;
  padding: 40px;
  margin-right: 40px;
`;

const CartProductsSubTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
  margin-bottom: 8px;
`;
const CartProductsTitle = styled.div`
  font-weight: bold;
  font-size: 24px;
  line-height: 40px;
  color: #283342;
  margin-bottom: 24px;
`;

const CartProductsSeparator = styled.div`
  border: 1px solid #91979e;
  width: 100%;
  margin-bottom: 24px;
`;

const CartProductListTitle = styled.div`
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
  margin-bottom: 20px;
`;

const CartProductList = styled.div``;
const CartProduct = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 28px;
  border-bottom: 1px solid #f0f0f0;

  &:last-child {
    margin-bottom: 0;
    border-bottom: 0;
  }
`;
const CartProductImage = styled.img`
  display: flex;
  width: 92px;
  height: 65px;
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 28px;
  margin-right: 16px;
`;
const CartProductInfo = styled.div`
  width: 100%;
`;
const CartProductInfoName = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  color: #283342;
  margin-bottom: 8px;
`;
const CounterInputWrapperStyle = {
  border: "1px solid rgb(229, 231, 232)",
  borderRadius: "32px",
  maxWidth: "108px",
};
const CartProductOptions = styled.div``;
const CartProductPrice = styled.div`
  font-weight: bold;
  font-size: 16px;
  line-height: 16px;
  text-align: right;
  color: #283342;
  margin-bottom: 16px;
`;
const CartResumen = styled.div`
  width: 480px;
  height: 536px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  padding: 40px;
`;
const CartResumenHeader = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
`;

const CartResumenTitle = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
`;

const CartResumenSubTotal = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  text-align: right;
  color: #283342;
`;
const Cupon = styled.div`
  display: flex;
`;
const CuponInput = styled.input`
  flex: 1;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  letter-spacing: 0.015em;
  color: #91979e;
  padding: 16px 12px;
  background: #ffffff;
  border: 1px solid #e5e7e8;
  box-sizing: border-box;
  border-radius: 4px;
  margin-right: 20px;
`;
const CartModalidadEntrega = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 24px;
`;
const Modalidad = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ selected }) => (selected ? "#ff9f5f" : "#E5E7E8")};
  box-sizing: border-box;
  border-radius: 16px;
  color: ${({ selected }) => (selected ? "#FF6038" : "#283342")};
  background: ${({ selected }) => (selected ? "#FFDEBA" : "#fff")};
  width: 188px;
  height: 48px;
  cursor: pointer;
  margin-right: 24px;

  &:last-child {
    margin-right: 0;
  }
`;

const Separator = styled.div`
  border: 1px solid #f0f0f0;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 24px;
`;

const DeliveryContent = styled.div`
  display: flex;
`;

const DeliveryTitle = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
`;

const DeliveryPrice = styled.div`
  font-weight: normal;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
`;

const TotalContent = styled.div`
  display: flex;
`;

const TotalTitle = styled.div`
  flex: 1;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  color: #283342;
`;

const TotalPrice = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;

  color: #283342;
`;

export function CartScreen() {
  const { cart, updateQuantityToCart, removeToCart } =
    useContext(EcommerceContext);
  const [openCupon, setOpenCupon] = useState(false);
  const [selectedModalidad, setSelectedModalidad] = useState(0);

  function handleChangeQuantity(productId, quantity) {
    updateQuantityToCart(productId, quantity);
  }

  function handleRemoveProduct(productId) {
    removeToCart(productId);
  }

  function getSubTotal() {
    const subtotal = cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );

    return subtotal;
  }

  function getDelivery() {
    if (selectedModalidad === 1) return 15;

    return 0;
  }

  function getTotal() {
    return getSubTotal() + getDelivery();
  }

  return (
    <Layout>
      <CartContent>
        <CartTitle>Tu Orden</CartTitle>
        <CartWrapper>
          <CartProducts>
            <CartProductsSubTitle>Dirección de envío</CartProductsSubTitle>
            <CartProductsTitle>
              Av. La Marina 220, San Miguel, Lima
            </CartProductsTitle>
            <CartProductsSeparator />
            <CartProductListTitle>Productos</CartProductListTitle>
            <CartProductList>
              {cart &&
                cart.map((product, index) => (
                  <CartProduct key={`cart-product-${index}`}>
                    <CartProductImage src={product.image} loading="lazy" />
                    <CartProductInfo>
                      <CartProductInfoName>{product.name}</CartProductInfoName>
                      <CounterInput
                        min={1}
                        max={100}
                        count={product.quantity}
                        wrapperStyle={CounterInputWrapperStyle}
                        onCountChange={count =>
                          handleChangeQuantity(product.id, count)
                        }
                      />
                    </CartProductInfo>
                    <CartProductOptions>
                      <CartProductPrice>
                        {formatCurrency(product.price * product.quantity)}
                      </CartProductPrice>
                      <Button onClick={() => handleRemoveProduct(product.id)}>
                        Eliminar
                      </Button>
                    </CartProductOptions>
                  </CartProduct>
                ))}
            </CartProductList>
          </CartProducts>
          <CartResumen>
            <CartResumenHeader>
              <CartResumenTitle>Total por productos</CartResumenTitle>
              <CartResumenSubTotal>
                {formatCurrency(getSubTotal())}
              </CartResumenSubTotal>
            </CartResumenHeader>
            <Accordion
              header="Agregar cupón"
              open={openCupon}
              onClick={() => setOpenCupon(!openCupon)}
            >
              <Cupon>
                <CuponInput
                  type="text"
                  name="cupon"
                  placeholder="Código de cupón"
                />
                <Button>Aplicar Cupón</Button>
              </Cupon>
            </Accordion>
            <CartResumenTitle>Modalidad de Entrega</CartResumenTitle>
            <CartModalidadEntrega>
              <Modalidad
                selected={selectedModalidad === 1}
                onClick={() => setSelectedModalidad(1)}
              >
                Delivery
              </Modalidad>
              <Modalidad
                selected={selectedModalidad === 2}
                onClick={() => setSelectedModalidad(2)}
              >
                Recojo en Tienda
              </Modalidad>
            </CartModalidadEntrega>
            <Separator />
            <DeliveryContent>
              <DeliveryTitle>Delivery</DeliveryTitle>
              <DeliveryPrice>{formatCurrency(getDelivery())}</DeliveryPrice>
            </DeliveryContent>
            <Separator />
            <TotalContent>
              <TotalTitle>Total</TotalTitle>
              <TotalPrice>{formatCurrency(getTotal())}</TotalPrice>
            </TotalContent>
          </CartResumen>
        </CartWrapper>
      </CartContent>
    </Layout>
  );
}
