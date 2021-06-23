import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { Navigation } from "./screens/navigation";
import { EcommerceProvider } from "./contexts";

function App() {
  return (
    <EcommerceProvider>
      <Router>
        <Navigation />
      </Router>
    </EcommerceProvider>
  );
}

export default App;
