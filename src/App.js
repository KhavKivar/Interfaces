
import './App.css';

import { Component } from "react";

import Main from './components/Main';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



class App extends Component {  
  constructor(props){
    super(props);

    this.handleItems = this.handleItems.bind(this);

    this.state = {
      historial: [],
    }
  }

  handleItems(hist) { 
    const aux = this.state.historial
    let aux2 =  aux.concat(hist)
    this.setState({
      historial:aux2
    });
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    let hour = String(today.getHours()).padStart(2, '0');
    let minutes = String(today.getMinutes()).padStart(2, '0')  

    today = yyyy + '-' + mm + '-' + dd + 'T' + hour + ':' + minutes + ':00-04:00';
    let historial = []

    if(JSON.parse(localStorage.getItem("historial"))){
      historial = JSON.parse(localStorage.getItem("historial"))
      let acumulado = historial.concat([[aux2, today]])
      localStorage.setItem("historial", JSON.stringify(acumulado))
    } else {
      localStorage.setItem("historial", JSON.stringify([[aux2, today]]))
    }
  }
  
  render(){

    return (
      <Router>
        <Switch>
            <Route exact path="/">
            <Main historial={this.state.historial} funcion={this.handleItems} ></Main>
            </Route>
        </Switch>
      </Router>
    );
  }
}


export default App;
