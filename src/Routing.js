import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserPage from "./pages/UserPage";
import ProductPage from "./pages/ProductPage";
import { DataProvider } from "./components/DataContext";
import Navbar from "./components/Navbar";

const Routing = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/users">
          <DataProvider dataType="users">
            <UserPage />
          </DataProvider>
        </Route>
        <Route path="/products">
          <DataProvider dataType="products">
            <ProductPage />
          </DataProvider>
        </Route>
      </Switch>
    </Router>
  );
};

export default Routing;
