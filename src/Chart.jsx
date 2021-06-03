import { green } from '@material-ui/core/colors';
import React , {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import reactDom from 'react-dom';
import styles from './chart.css'

class Chart extends Component{
  constructor(props){
    super(props);
    this.state = {
      infected:props.confirmed,
      recovered :props.recovered,
      deaths :props.recovered,
      chartData : {
        labels: props.date,
        datasets:[
          {
            label:'Daily Confirmed',
            data:props.dateWiseData,

            backgroundColor:[
              'rgba(0 , 0 ,255 , 0.5)'
              
           
            ]
          },{
            label :'Daily Recovered',
            data: props.dailyRecovery,
            backgroundColor:[
              'rgba(144,238,144,0.6)'
            ]
          }
        ]
      }
    }

  }
  render() {
    return(
      <div className = "container">
        <Line
          data={this.state.chartData}
          options={{
            title:{
              display:true,
              text:'Corona Cases',
              fontSize:25
            },
            legend:{
              display:true
            }
          }}
        />
         {/* <Line
        data={{
          datasets: [{
            data: props.dateWiseData,
            label: 'Infected',
            borderColor: '#3333ff',
            fill: true,
          },
          //  {
          //   data: dailyData.map((data) => data.deaths),
          //   label: 'Deaths',
          //   borderColor: 'red',
          //   backgroundColor: 'rgba(255, 0, 0, 0.5)',
          //   fill: true,
          // }, 
          {
            data: props.dailyRecovery,
            label: 'Recovered',
            borderColor: 'green',
            backgroundColor: 'rgba(0, 255, 0, 0.5)',
            fill: true,
          },
          ],
        }}
      /> */}


      </div>
    )
  }

}
export default Chart;