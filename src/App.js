import React from 'react';
<<<<<<< HEAD
import {Route,Link} from "react-router-dom";
=======
import {Route, Switch} from "react-router-dom";
import './App.css';
>>>>>>> 8dd9f6066e8ea12b6943bfa28844c95408d4888d
import HomePage from "./pages/homepage/homepage";
import './App.css';

// const HomePage = props => {
//   return (
//     <div>
//       <button onClick = {() => props.history.push("/topics")}>Topics</button>
//       <h1>Home Page</h1>
//     </div>
//   );
// };

const TopicsList = props => {
  return(
    <div>
      <h1>Topics List</h1>
      <Link to={`${props.match.url}/13`}>To Topic 13</Link>
      <Link to={`${props.match.url}/17`}>To Topic 17</Link>
      <Link to={`${props.match.url}/21`}>To Topic 21</Link>
    </div>
  );
};

const TopicDetail = props => {
  return(
    <div>
      <h1>Topic Detail Page: {props.match.params.topicId}</h1>
    </div>
  );
};


<<<<<<< HEAD
function App() {
    return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route exact path="/topics/:topicId" component={TopicDetail} />
=======
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
>>>>>>> 8dd9f6066e8ea12b6943bfa28844c95408d4888d
    </div>
    );
 };

export default App;
