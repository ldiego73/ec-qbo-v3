import React, { useContext } from "react";
import CounterInput from "react-counter-input";
import styled from "styled-components";
import { Button } from "../../components";
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
const CartProductInfo = styled.div``;
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
`;

export function CartScreen() {
  const { cart, updateQuantityToCart, removeToCart } =
    useContext(EcommerceContext);

  function handleChangeQuantity(productId, quantity) {
    updateQuantityToCart(productId, quantity);
  }

  function handleRemoveProduct(productId) {
    removeToCart(productId);
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
                        onCountChange={(count) =>
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
        </CartWrapper>
      </CartContent>
    </Layout>
  );
}
