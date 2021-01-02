
import './App.css';

import ReactDOM, { Component } from "react";

import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (
    <Router>
      <switch>
          <Route exact path="/">
           <Main></Main>
          </Route>
      </switch>
     </Router>
  );
}





export default App;
