
import { withStyles } from '@material-ui/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../style/calendar.css';
import React, { Component } from 'react'
import SimpleModal from './modal.js'

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
  
    this.state = {
        modalOpen:false,
        lista:[]
    };

}   


handleClick= (event,k) =>{
  
  console.log(event.event.classNames)
  this.setState(
    {modalOpen:!this.state.modalOpen,
    lista:event.event.classNames
    })
    
}


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
            {this.state.modalOpen ? <SimpleModal lista={this.state.lista} modal = {true}></SimpleModal> : ""}
          </div>
      </div>


    )}
}

export default withStyles(styles, { withTheme: true })(Calendar);