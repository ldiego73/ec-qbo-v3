import React from "react";
import { Route, Switch } from "react-router-dom";

import { CheckoutScreen } from "./checkout";
import { NotFoundScreen } from "./not-found";
import { LoginScreen } from "./oauth/login";
import { HomeScreen } from "./home";
import { HistoryScreen } from "./history";
import { StoreScreen } from "./store";
import { CartScreen } from "./cart";
import { ProductScreen } from "./store/product";

export const Navigation = () => (
  <Switch>
    <Route exact path="/oauth/login" component={LoginScreen} />
    <Route exact path="/" component={HomeScreen} />
    <Route exact path="/cart" component={CartScreen} />
    <Route exact path="/checkout" component={CheckoutScreen} />
    <Route exact path="/history" component={HistoryScreen} />
    <Route exact path="/store" component={StoreScreen} />
    <Route exact path="/product/:id" component={ProductScreen} />
    <Route path="*" component={NotFoundScreen} />
  </Switch>
);
