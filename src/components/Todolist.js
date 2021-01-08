import React, { Component } from "react";

import '../style/start.css';

import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { Done,Add} from "@material-ui/icons";
import { StylesProvider } from "@material-ui/core/styles";
import AssignmentIcon from '@material-ui/icons/Assignment';
import IconButton from '@material-ui/core/IconButton';

import { green} from '@material-ui/core/colors';

import {ThemeProvider } from "@material-ui/core";

import { createMuiTheme} from '@material-ui/core/styles';
import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      }
      
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
    palette: {
      primary: {
        main:  '#FFF',
      },
      secondary: {
        main: green[500],
      },
    },

  });


  const styleshy = {

    largeIcon: {
      width: 60,
      height: 60,
    },
  
  };



class Todolist extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.state = {
            items:[],
            text:"",
        };

    }
    


    addItem(e){
        e.preventDefault();
        if(this.state.text !== ""){

            const newL = [this.state.text,...this.state.items]
            this.setState({
                items:newL,
                text :""
            })
     }
    }

    removeItem(e){
       
        let index = this.state.items.indexOf(e);
        console.log(index);
        const L = this.state.items;
        L.splice(index,1);
        this.setState({
            text : this.state.text,
            items:L
        })
       

    }



    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }

    _handleKeyDown = (e) => {
        if (e.key === 'Enter' && this.state.text !== "") {
            const newL = [this.state.text,...this.state.items]
            this.setState({
                items:newL,
                text :""
            })
        }
      }


    render(){

        const {classes} = this.props;
        return(

           
                <div id="capaInf">
                    <div id = "textFill">

                    <ThemeProvider theme={theme}>
                            <TextField   onKeyDown={this._handleKeyDown} 
                             style = {{width: 430}}
                            name = "text"
                            value = {this.state.text}
                            onChange = {this.handleChange}
                            inputProps={{ maxLength: 14 }}
                            id="outlined-basic"
                            label= {this.state.text === "" ?  "Ingrese Tarea" : ""}
                            variant="outlined"
                            InputLabelProps = {{
                              style:{color:" #DB524D"},shrink: false }}

                            InputProps={{
                                  style:{background:"white", color:"#DB524D"}
                                  
                              }}
                            />
                            </ThemeProvider>

                       
                                <Button  
                                style = {{marginLeft:3}} className = {classes.pink}  onClick = {this.addItem}>
                                <Add  style={{ fontSize: 40 }} ></Add>
                           
                             </Button>
                      
                         



                    </div>
                    <div id = "listItem">
                        <List disablePadding = {true}>
                        {this.state.items.map(x =>
                            <ListItem   key = {x.key} disableGutters = {true}>
                            <ListItemAvatar>
                            <Avatar className={classes.pink}>
                             <AssignmentIcon   style={{ color: "#DB524D" }}/>

                        </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                             disableTypography
                        primary={<Typography  type="body2" style={{  fontSize:"large", color: '#FFFFFF' }}>{x}</Typography>}
                            />


                            <ListItemSecondaryAction>

                                <StylesProvider injectFirst>
                            <IconButton     onClick = {() => this.removeItem(x)}>
                                <Avatar className={classes.pink} >
                            <DeleteIcon style={{ color: "#DB524D" }} ></DeleteIcon>
    
                            </Avatar>
                            </IconButton>
                            </StylesProvider>

                            </ListItemSecondaryAction>
                            </ListItem>,
                        )}
                        </List>
                    </div>
                  
       
        </div>
        

   

   
     


        )
    }
}


export default withStyles(styles, { withTheme: true })(Todolist);
