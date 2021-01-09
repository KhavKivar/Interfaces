
import { withStyles } from '@material-ui/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../style/calendar.css';
import React, { Component } from 'react'
import SimpleModal from './modal.js'
import Button from '@material-ui/core/Button';

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



class Calendar extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleCloseModal =this.handleCloseModal.bind(this);
    this.modalRef = React.createRef();

    this.state = {
        modalOpen:false,
        lista:[]
    };

}   


handleClick= (event,k) =>{
  
  console.log(event.event.classNames)
  this.setState(
    {modalOpen:true,
    lista:event.event.classNames
    })
    
}

handleCloseModal = () => {
  this.setState({ modalOpen: false });
};




    render(){

      let historial = JSON.parse(localStorage.getItem("historial"))
      let id = 0
      var events
      if(historial != null){

      
       events = historial.map(function(item) {
        let pom = {

          id: id,
          title: 'Pomodoro ('+Object.values(item)[0]+' tareas)',
          start: Object.values(item)[1],
          classNames:["asd"]
        }
        id = id + 1
        return pom  
      })
    }else{
      events = null
    }
      console.log(events)
      return (
      <div>
          <div id="cal">
              <FullCalendar 
              editable={true}
              selectable={true}
              selectMirror={true}
              dayMaxEvents={2}
              moreLinkClick="popover"
              aspectRatio="1.6 " 
              plugins={[ dayGridPlugin ]} 
              themeSystem="theme"
              firstDay="1"
              locale="esLocale"
              events={events}
              eventClick={this.handleClick}
              />  
              <SimpleModal  onCloseModal={this.handleCloseModal} isOpen={this.state.modalOpen} ref ={this.modalRef} lista={this.state.lista} modal = {true}>
            
              



                </SimpleModal>;
               
               
                

              
          </div>
      </div>


    )}
}

export default withStyles(styles, { withTheme: true })(Calendar);