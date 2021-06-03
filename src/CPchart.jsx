import { green } from '@material-ui/core/colors';
import React , {Component} from 'react'
import {Bar, Line, Pie} from 'react-chartjs-2';
import styles from './CPchart.css'


function CPchart(props) {
  const chartData = {
            labels: ["Infected" , "Recovered"],
            datasets: [
              {
                label: props.selectedValue.label,
                backgroundColor: ['rgba(0 , 0 ,255 , 0.5)'
                ,' rgba(0 , 255 ,0, 0.5)'],
                borderColor: 'rgba(0,0,0,1)',
                borderWidth: 1,
                data: [ props.selectedValue.confirmed, props.selectedValue.recovered]
              }
             
            ]
          }
          // console.log(chartData.datasets[0].label)
  return (

  <div className = "barChart">
     <Bar
          data={chartData}
          options={{
            responsive : true,
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
  </div>
  )
}

// class CPchart extends Component{

// constructor(props){
//   super(props)
//   this.state = {
//       infected : props.selectedValue.confirmed,
//       recovered : props.selectedValue.confirmed,
//       stateName : props.selectedValue.label,
//       chartValues :{
//         labels: ["Infected" , "Recovered"],
//         datasets: [
//           {
//             label: props.selectedValue.label,
//             backgroundColor: ['rgba(0 , 0 ,255 , 0.5)'
//             ,' rgba(0 , 255 ,0, 0.5)'],
//             borderColor: 'rgba(0,0,0,1)',
//             borderWidth: 1,
//             data: [ props.selectedValue.confirmed, props.selectedValue.recovered]
//           }
//         ]
//       }
      
//   }
  
//   this.setState({
//     chartValues : {
//       labels: ["Infected" , "Recovered"],
//       datasets: [
//         {
//           label: this.state.stateName,
//           backgroundColor: ['rgba(0 , 0 ,255 , 0.5)'
//           ,' rgba(0 , 255 ,0, 0.5)'],
//           borderColor: 'rgba(0,0,0,1)',
//           borderWidth: 1,
//           data: [ this.state.infected, this.state.recovered]
//         }
//       ]
//     }
        
//   })
//   console.log(this.state.infected)

// }



//   render(){
//     return(
//      <div>
//        <h1>
//          hello {this.state.stateName}
//        </h1>
//        <Bar
//           data={this.state.chartValues}
//           options={{
//             title:{
//               display:true,
//               text:'Average Rainfall per month',
//               fontSize:20
//             },
//             legend:{
//               display:true,
//               position:'right'
//             }
//           }}
//         />
//      </div>
//     )
//   }
// }


export default CPchart;