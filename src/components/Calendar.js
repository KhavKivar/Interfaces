import { createMuiTheme, withStyles } from '@material-ui/core'
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

class Calendar extends Component {
    constructor(props){
        super(props);

    }


    render(){
        return (
        <div>
            <div id="cal">
                <FullCalendar 
                
                aspectRatio="1.8" 
                defaultView="dayGridMonth" 
                plugins={[ dayGridPlugin ]} 
                themeSystem="theme"
                firstDay="1"
                locale="esLocale"
                events={[ //eventos dummy por el momento    
                    {
                      id: 'a',
                      title: 'Pomodoro 1',
                      start: '2021-01-01'
                    },
                    {
                        id: 'b',
                        title: 'Pomodoro 2',
                        start: '2021-01-01'
                    }
                  ]}
                />
                
            </div>
        </div>
    )}
}

export default withStyles(styles, { withTheme: true })(Calendar);
