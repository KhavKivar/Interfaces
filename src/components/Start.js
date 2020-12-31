import React, { Component } from "react";

import Background from './Background.js';
import '../style/start.css';
import TextField from '@material-ui/core/TextField';


import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';
import { Done } from "@material-ui/icons";
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