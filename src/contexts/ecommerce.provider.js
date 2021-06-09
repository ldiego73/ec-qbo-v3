import { useReducer } from "react";
import { EcommerceContext } from "./ecommerce.context";
import {
  ADD_PRODUCT,
  initialState,
  reducer,
  REMOVE_PRODUCT,
  UPDATE_PRODUCT,
  UPDATE_QUANTITY_PRODUCT,
} from "./ecommerce.reducer";

export function EcommerceProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addToCart(product) {
    dispatch({ type: ADD_PRODUCT, product });
  }

  function removeToCart(productId) {
    dispatch({ type: REMOVE_PRODUCT, productId });
  }

  function updateToCart(product) {
    dispatch({ type: UPDATE_PRODUCT, product });
  }

  function updateQuantityToCart(productId, quantity) {
    dispatch({ type: UPDATE_QUANTITY_PRODUCT, productId, quantity });
  }

  return (
    <EcommerceContext.Provider
      value={{
        cart: state.cart,
        addToCart,
        removeToCart,
        updateToCart,
        updateQuantityToCart,
      }}
    >
      {children}
    </EcommerceContext.Provider>
  );
}
