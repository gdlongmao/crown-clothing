import React from 'react';
import {Route,Link} from "react-router-dom";
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


function App() {
    return (
    <div>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/topics" component={TopicsList} />
      <Route exact path="/topics/:topicId" component={TopicDetail} />
    </div>
    );
 };

export default App;
