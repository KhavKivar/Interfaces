import React, { Component } from "react";

import '../style/start.css';

import Typography from '@material-ui/core/Typography';

import TextField from '@material-ui/core/TextField';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import Button from '@material-ui/core/Button';

import { Create, Done,Add} from "@material-ui/icons";

import AssignmentIcon from '@material-ui/icons/Assignment';
import IconButton from '@material-ui/core/IconButton';


import { green, pink } from '@material-ui/core/colors';
import FolderIcon from '@material-ui/icons/Folder';
import { createSvgIcon } from "@material-ui/core";


import { withStyles } from '@material-ui/core/styles';


const styles = theme => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    pink: {
      color: theme.palette.getContrastText(pink[500]),
      backgroundColor: pink[500],
    },
    green: {
      color: '#fff',
      backgroundColor: green[500],
    },
  });




class Todolist extends Component{
    constructor(props){
        super(props);
        this.addItem = this.addItem.bind(this);
        this.state = {
            items:[],
            text:""
        };

    }
    


    addItem(e){
        e.preventDefault();
        if(this.state.text != ""){

            const newL = [this.state.text,...this.state.items]
            this.setState({
                items:newL,
                text :""
            })
     }
    }



    handleChange = (event) =>{
        this.setState({
            [event.target.name]:event.target.value
        })
    }



    render(){

        const {classes} = this.props;
        return(

            <div id = "capaSup">
                <div id="capaInf">
                    <div id = "textFill">
                            <TextField  
                             style = {{width: 430}}
                            name = "text"
                            value = {this.state.text}
                            onChange = {this.handleChange}
                            id="outlined-basic" label="Ingrese Tarea" variant="outlined"
                                InputProps={{
                                    style:{background:"white"},
                                }}
                            />
                           
                                <Button className = {classes.pink}  onClick = {this.addItem}>
                             <Add  size = "medium"
                                ></Add>
                             </Button>
                            
                     
                         



                    </div>
                    <div id = "listItem">
                        <List dense={this.state.items} disablePadding = "true">
                        {this.state.items.map(x =>
                            <ListItem >
                            <ListItemAvatar>
                            <Avatar className={classes.pink}>
                             <AssignmentIcon />

                        </Avatar>
                            </ListItemAvatar>
                            <ListItemText 
                             disableTypography
                        primary={<Typography  type="body2" style={{  fontSize:"large", color: '#FFFFFF' }}>{x}</Typography>}
                            />


                            <ListItemSecondaryAction>

                            
                            <IconButton >
                                <Avatar className={classes.pink}>
                            <DeleteIcon ></DeleteIcon>
    
                            </Avatar>
                            </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>,
                        )}
                        </List>
                    </div>
                        <div id = "final">
                    <Button 
                            variant="contained"
                            color="secondary"
                            startIcon={<Done />}
                            fullWidth = "true"
                        >
                        Empezar
                 </Button >
                 </div>
       
        </div>
        

   

        </div>
     


        )
    }
}


export default withStyles(styles, { withTheme: true })(Todolist);
