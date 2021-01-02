import React, { Component } from "react";
import '../style/background.css';
import { ChildCare } from "@material-ui/icons";
import Grid from '@material-ui/core/Grid';

class Background extends Component{

    render(){
        return (
  
            <div id = "titulo" >
                <Grid container direction="row" alignItems="center">
                 <Grid item>
                <ChildCare fontSize="large">  </ChildCare>
                </Grid>
                <Grid item >
                     <p><a href= "/"> Pomodoro </a></p>
               </Grid>
               </Grid>
            </div>
        
        )
    }
}

export default Background;