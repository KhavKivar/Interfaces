import React, { Component } from "react";

import '../style/start.css';



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
import { Create, Done } from "@material-ui/icons";


import IconButton from '@material-ui/core/IconButton';



import FolderIcon from '@material-ui/icons/Folder';


function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

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


        return(

            <div id = "capaSup">
                <div id="capaInf">
                    <div id = "textFill">
                            <TextField  
                            name = "text"
                            value = {this.state.text}
                            onChange = {this.handleChange}
                            id="outlined-basic" label="Ingrese Tarea" variant="outlined"
                                InputProps={{
                                    style:{background:"white"},
                                }}
                            />
                                        <Button onClick = {this.addItem}
                            variant="contained"
                            color="secondary"
                            startIcon={<Done />}
                        >
                        Agregar
                        </Button >
                    </div>
                    <div id = "listItem">
                        <List dense={this.state.items}>
                        {this.state.items.map(x =>
                            <ListItem >
                            <ListItemAvatar>
                                <Avatar>
                                <Create/>
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText fullWidth = "true" 
                                primary={x}
                            />
                            <ListItemSecondaryAction>
                                <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                            </ListItem>,
                        )}
                        </List>
                    </div>

                    <Button 
                            variant="contained"
                            color="secondary"
                            startIcon={<Done />}
                        >
                        Empezar
                        </Button >
       
        </div>
        

   

        </div>
     


        )
    }
}


export default Todolist;