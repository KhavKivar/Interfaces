import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 ;
  const left = 50 ;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const styles = theme => ({
  root: {
    color: "#FFFFFF"
  },

  paper: {
    position: 'absolute',
    width: theme.spacing.unit * 50,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing.unit * 4,
    outline: 'none',
  },
});


const WhiteTextTypography = withStyles({
  root: {
    color: "#f50057"
  }
})(Typography)


class SimpleModal extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            Open:this.props.isOpen,

        };
        console.log("asd"+this.state.lista)
        
    }

 

 

  render() {
    const { classes } = this.props;
    const { x } = this.props;


    let myComponent;
    if(this.props.lista != null){
      myComponent =   this.props.lista.map(x=><p>{x}</p>);
    }else{
      myComponent = ""
    }
    return (
      <div>
        
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.props.isOpen}
          onClose={this.props.onCloseModal}
        >
          <div style={getModalStyle()} className={classes.paper}>
            <Typography color = "secondary"  variant="h6" id="modal-title">
              Tareas Realizadas
            </Typography>
       

            <WhiteTextTypography variant="primary">
            {
                
                myComponent
              
              }
      </WhiteTextTypography>

            <div id = "iz">
            <Button onClick={this.props.onCloseModal} variant="primary">Cerrar</Button>


            </div>
          
          </div>
        </Modal>
      </div>
    );
  }
}

SimpleModal.propTypes = {
  classes: PropTypes.object.isRequired,
};

// We need an intermediary variable for handling the recursive nesting.
const SimpleModalWrapped = withStyles(styles)(SimpleModal);

export default SimpleModalWrapped;