import React from 'react';
import { Route, Switch } from "react-router-dom";
import HomePage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shoppage";
import SignInAndSignUpPage from "./components/sign-in-and-sign-up/sign-in-and-sign-up";
import Header from "./components/header/header";
import './App.css';
import { auth } from "./firebase/firebase.utils";

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser: null
    }
  };

  unsubscribeFromAuth = null;

  componentDidMount(){
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user});
      console.log(this.user);
    })
  }

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  };
}

export default App;
