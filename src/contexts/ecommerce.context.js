import { createContext } from "react";

export const EcommerceContext = createContext({
  cart: [],
  addToCart(product) {},
  removeToCart(productId) {},
  updateToCart(product) {},
  updateQuantityToCart(productId, quantity) {},
});
