import { Button } from "@material-ui/core";
import React, { Component } from "react";

import '../style/count.css';
import { withStyles } from '@material-ui/core/styles';


import {ThemeProvider } from "@material-ui/core";

import { createMuiTheme} from '@material-ui/core/styles';
import { Check } from "@material-ui/icons";



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





class Count extends Component{
    constructor(props){
        super(props);
        this.descanso = this.descanso.bind(this);
        this.terminoDescanso=this.terminoDescanso.bind(this);

        this.state = {
            duracion:1500,
            minutos:"25",
            segundos:"00",
            rest:false,
            ciclo:0,
            finish:false
        }
    }


    tick(){
      var timer = this.state.duracion, minutes, seconds;
      if(timer >0){
          timer = timer-1;
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);

        

          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds;

          var textContent = minutes + ":"+seconds;
          console.log(textContent);


          this.setState({
              duracion:timer,
              minutos:minutes,
              segundos:seconds  
          })
      }
   


    }
    terminoDescanso(){
      if(this.state.ciclo < 3){
        this.setState({
          rest:false,
          duracion:1500,
          minutos:"25",
          segundos:"00",
          ciclo:this.state.ciclo +1
        })
      }
      if(this.state.ciclo === 3){
        this.setState({
          finish:true
        })

      }
    }


    descanso(){
        this.setState({
          rest:true,
          duracion:300,
          minutos:"05",
          segundos:"00",
        })
  
    }


    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
      }
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    

    render(){
        const {classes} = this.props;
        let button;
        button = ""
        if(this.state.duracion === 0){
           button =  "ok"
        }
        let text = "Tiempo de concentracion";
        if(this.state.rest){
          text = "Tiempo de descanso"
        }

        let code =    <div id="countdown">
                              <div id ="cajas">
                              {this.state.ciclo === 1 && 
                                <Button className = {classes.pink} >
                                <Check style={{ fontSize: 40 }} ></Check>
                              </Button>
                              }
                              { this.state.ciclo === 2  && 
                                      <>
                                      <Button className = {classes.pink} >
                                      <Check style={{ fontSize: 40 }} ></Check>
                                      </Button>
                                      <Button className = {classes.pink} >
                                      <Check style={{ fontSize: 40 }} ></Check>
                                      </Button>
                                      </>
                              }
                              
                              { this.state.ciclo === 3 && 
                                        <>
                                        <Button className = {classes.pink} >
                                        <Check style={{ fontSize: 40 }} ></Check>
                                        </Button>
                                        <Button className = {classes.pink} >
                                        <Check style={{ fontSize: 40 }} ></Check>
                                        </Button>
                                          <Button className = {classes.pink} >
                                      <Check style={{ fontSize: 40 }} ></Check>
                                        </Button>
                                        </>
                                }
                              

                              
                              
                          

                              </div>


                          <h2> {text}  </h2>
                            <p>{this.state.minutos}:{this.state.segundos}</p> 

                              {button  !== "" && 
                                          <ThemeProvider theme={theme}>
                                          <div id= "btn">

                                        {this.state.rest ? <Button onClick = {this.terminoDescanso} fullWidth={true} style={{ fontSize: '27px' }}  variant="contained"  className = {classes.pink} >
                                            Siguiente
                                        </Button>: 
                                        <Button onClick = {this.descanso} fullWidth={true} style={{ fontSize: '27px' }}  variant="contained"  className = {classes.pink} >
                                        Siguiente
                                    </Button>
                                        
                            }
                                        
                                        </div>
                                        </ThemeProvider>
                              }


                          </div>
        
        return(
          <>
          {this.state.finish ?
          
          <div id ="termino">
              <p>Gracias!</p>
              <div id = "btn">
              <ThemeProvider theme={theme}>
              <Button href="/" fullWidth={true} style={{ fontSize: '27px',backgroundColor:"white"}}  variant="contained"  className = {classes.pink} >
                      Inicio
              </Button>
              </ThemeProvider>
              </div>
          </div>:code}
          </>
        )
    }


}

export default withStyles(styles, { withTheme: true })(Count);

