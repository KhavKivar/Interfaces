import React, { Component, Fragment } from "react";

import Background from './Background.js';

import Count from "./Count.js";
import Todolist from "./Todolist.js";

  

import { Done, ArrowBack} from "@material-ui/icons";
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import EventAvailableIcon from '@material-ui/icons/EventAvailable';

import {ThemeProvider } from "@material-ui/core";

import { createMuiTheme} from '@material-ui/core/styles';
import Calendar from "./Calendar.js";



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
        this.handleHist = this.handleHist.bind(this);


        this.TodolistRef = React.createRef();

        this.state = {
            start:false,
            hist:false
        };

    }
    handle(){
      const currentList = this.TodolistRef.current;
      if(currentList.state.items.length > 0){
        this.setState({
          start:true,
          
      })

      }

    }

    handleHist(){
      if(this.state.hist){
        this.setState({
          hist:false
        })
      } else {
        this.setState({
          hist:true
        })
      }
   
    }

    render(){
        const {classes} = this.props;


        return(
            <div>
            <Background></Background>
            <div id = "capaSup">

                {this.state.hist ? //if hist, mostramos el calendario y el btn volver
                <Fragment> 
                  <Calendar></Calendar>
                  <div id="final">
                    <Button 
                      className = {classes.pink}
                          onClick={this.handleHist}
                          variant="contained"
                          color="secondary"
                          startIcon={<ArrowBack />}
                          fullWidth = {true}
                          size = "large"
                      >
                      Volver
                    </Button > 
                  </div>
                </Fragment> : //si no, se muestra el contador, o el todolist
                this.state.start ? <Count></Count>: <Todolist ref={this.TodolistRef}></Todolist>}


                    <div id = "final">
                    <ThemeProvider theme={theme}>
                    {this.state.hist || this.state.start ? null :


                      <Fragment>
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
                      
                      <div style={{marginTop:"5px "}}>
                        <Button 
                        className = {classes.pink}
                            onClick={this.handleHist}
                            variant="contained"
                            color="secondary"
                            startIcon={<EventAvailableIcon />}
                            fullWidth = {true}
                            size = "large"
                        >
                        Ver historial
                        </Button >
                      </div>
                      </Fragment>
                    }
                    </ThemeProvider>
                    
                    </div>
        
            </div>
           
           </div>
        )
    }

}

export default withStyles(styles, { withTheme: false })(Main);
