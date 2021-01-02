import React, { Component } from "react";

import Background from './Background.js';


import Count from "./Count.js";
import Todolist from "./Todolist.js";

  

import { Done,Add} from "@material-ui/icons";
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';


import {ThemeProvider } from "@material-ui/core";

import { createMuiTheme} from '@material-ui/core/styles';



const styles = theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    pink: {
        '&:hover': {
            backgroundColor: "white",
            color: '#FFF'
        },

      color: theme.palette.getContrastText("#f50057"),
      backgroundColor: "white",
    },
  });

  const theme = createMuiTheme({
    overrides: {
        MuiButton: {
            label: {
                color: " #DB524D"
              },
        },
      },


    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Oxygen',
        'sans-serif',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
      ].join(','),
    },
  });




class Main extends Component{
    constructor(props){
        super(props);
        this.handle = this.handle.bind(this);


        this.TodolistRef = React.createRef();

        this.state = {
            start:false
        };

    }
    handle(){
      const currentList = this.TodolistRef.current;
      if(currentList.state.items.length > 0){
        this.setState({
          start:true
      })

      }
    

        

    }

    render(){
        const {classes} = this.props;


        return(
            <div>
            <Background></Background>
            <div id = "capaSup">
                {this.state.start ? <Count></Count>: <Todolist ref={this.TodolistRef}></Todolist>}
                {!this.state.start && 
                    <div id = "final">
                    <ThemeProvider theme={theme}>

                    <Button 
                    className = {classes.pink}
                        onClick={this.handle}
                        variant="contained"
                        color="secondary"
                        startIcon={<Done />}
                        fullWidth = {true}
                        size = "large"
                    >
                    Empezar
                    </Button >
                    </ThemeProvider>
                    </div>}
                
            </div>
           
           </div>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Main);
