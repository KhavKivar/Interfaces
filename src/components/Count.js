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




var cont = 3;
var minutos25 = "00"
var seconds25 = "03"
var cont2 = 2;
var minutos5 = "00"
var seconds5 = "02"

class Count extends Component{
    constructor(props){
        super(props);
        this.descanso = this.descanso.bind(this);
        this.terminoDescanso=this.terminoDescanso.bind(this);

        this.state = {
            duracion:cont,
            minutos:minutos25,
            segundos:seconds25,
            rest:false,
            ciclo:0,
            finish:false,
            tareas:[],
            tareasDone:[],
            n:0,
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
      if(this.state.ciclo <= this.state.n){
        if(this.state.ciclo === (this.state.n - 1)){
          let ultimo = this.state.n
          this.setState({
            finish:true,
            ciclo: ultimo,
          })
        }else{
          this.setState({
            rest:false,
            duracion:cont,
            minutos:minutos25,
            segundos:seconds25,
            ciclo:this.state.ciclo +1
          })
        }
     
      }

      let aux = this.state.tareas
      let aux2 = this.state.tareasDone
      aux2.push(aux.pop())
      this.setState({
        tareasDone: aux2, 
      })
    }


    descanso(){
        this.setState({
          rest:true,
          duracion:cont2,
          minutos:minutos5,
          segundos:seconds5,
        })
  
    }


    componentDidMount() {
      this.interval = setInterval(() => this.tick(), 1000);
      const lista = this.props.tareas
      const n = this.props.numTareas
      this.setState({
        tareas:lista,
        n:n
      })

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



        let code =  <div id="countdown">
                        <div style={{flexDirection: "row"}} id ="cajas">
                          
                          {this.state.tareasDone.map(item => 
                          <>
                            <div style={{flexDirection:"column"}}>
                              <center style={{top: 100, marginBottom: "2px", color:"white"}} id="nombreTarea"> {item}</center>
                              <Button style={{width: "25%"} } className = {classes.pink} >
                                <Check style={{ fontSize: 40 }} ></Check>
                              </Button>
                            </div>
                          </>
                          ) 
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
          
          <div id ="countdown">
             <div style={{flexDirection:"row"}} id ="cajas">
                <>
                {this.state.tareasDone.map(item => 
                          <>
                            <div style={{flexDirection:"column"}}>
                              <center style={{top: 100, marginBottom: "2px", color:"white"}} id="nombreTarea"> {item}</center>
                              <Button style={{width: "25%"} } className = {classes.pink} >
                                <Check style={{ fontSize: 40 }} ></Check>
                              </Button>
                            </div>
                          </>
                          ) 
                          }
                </>
              </div>
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

