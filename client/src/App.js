import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shoppage";
import CheckoutPage from "./pages/checkout/checkout";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./redux/user/user.selector";
import { checkUserSession } from "./redux/user/user.actions";
import {GlobalStyle} from "./global.styles";

const App = ({checkUserSession, currentUser}) => {

  useEffect(() => {
    checkUserSession()
  },[checkUserSession]);

  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route exact path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin"
          render={() =>
            currentUser ?
              (<Redirect to="/" />) :
              (<SignInAndSignUpPage />)}
        />
      </Switch>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
