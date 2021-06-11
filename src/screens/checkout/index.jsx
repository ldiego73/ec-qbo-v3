import React from "react";

import { Layout } from "../../layouts/main";
import { CheckoutForm } from "./components/form-simple"

export function CheckoutScreen() {
  return (
    <Layout minHeight={500}>
      <CheckoutForm />
    </Layout>
  );
}
