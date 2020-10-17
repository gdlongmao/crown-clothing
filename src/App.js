import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shoppage";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header";
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
};

export default App;
