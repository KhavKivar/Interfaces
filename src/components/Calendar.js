import { withStyles } from '@material-ui/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import '../style/calendar.css';
import React, { Component } from 'react'

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


    render(){

      let historial = JSON.parse(localStorage.getItem("historial"))
      let id = 0
      let events = historial.map(function(item) {
        let pom = {
          id: id,
          title: 'Pomodoro ('+Object.values(item)[0]+' tareas)',
          start: Object.values(item)[1],
        }
        id = id + 1
        return pom  
      })
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
              />
              
          </div>
      </div>
    )}
}

export default withStyles(styles, { withTheme: true })(Calendar);
