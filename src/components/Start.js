import React, { Component } from "react";

import Background from './Background.js';
import Todolist from "./Todolist.js";
  




class Start extends Component{


    render(){
        return(
            <div>
            <Background></Background>

            <Todolist></Todolist>
            
            </div>

        )
    }

}

export default Start;