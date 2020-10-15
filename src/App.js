import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import HomePage from "./pages/homepage/homepage";

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

const TopicsList = () => {
  return(
    <div>
      <h1>Topics List</h1>
    </div>
  );
};

const TopicDetail = () => {
  return(
    <div>
      <h1>Topic Detail</h1>
    </div>
  );
};


function App() {
    return (
    <div>
      <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route exact path="/topics/new" component={TopicsList} />
      <Route exact path="/topics/:topicId" component={TopicDetail} />
      </Switch>
    </div>
    );
 };

export default App;
