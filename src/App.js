import React from 'react';
import reactDom from 'react-dom';
import Card from './Card'
import Chart from './Chart'
import image from './images/image.png';
import styles from './App.css'
import CountryPicker from './CountryPicker'


class App extends React.Component {
  state = {
    loading: true,
    confirmed: 0,
    recovered: 0,
    deaths: 0,
    dateWiseData :[],
    date: [],
    lastUpdated : 0,
    dateWiseRecovery : 0,
    confirmedState :[],
    recoveredState :[],
    stateName :[],
  }


  // data.cases_time_series[i].totalConfirmed

  async componentDidMount() {
    const url = "https://api.covid19india.org/data.json";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      confirmed: data.statewise[0].confirmed,
      recovered: data.statewise[0].recovered,
      deaths: data.statewise[0].deaths,
      // loading: false,
      lastUpdated : data.statewise[0].lastupdatedtime

    });
    let dailyDetails = [];
    let dates =[]
    let dailyRecovery =[]
    let stateConf = []
    let stateRec = []
    let stateName =[]
    for(let i = 0 ; i<487 ;i ++){
      dailyDetails.push(data.cases_time_series[i].dailyconfirmed)
      dates.push(data.cases_time_series[i].date)
      dailyRecovery.push(data.cases_time_series[i].dailyrecovered)
      if(i>=38){
        continue;
      }else{
         stateConf.push(data.statewise[i].confirmed)
         stateRec.push(data.statewise[i].recovered)
         stateName.push(data.statewise[i].state)
      }

    }
    // let dailyDetails = [...this.state.dateWiseData , ...data.cases_time_series]
    this.setState({
      dateWiseData : dailyDetails,
      date : dates,
      dateWiseRecovery : dailyRecovery,
      confirmedState : stateConf,
      recoveredState : stateRec,
      stateName : stateName,
      loading : false,
    })
   
    // console.log(this.state.stateName);
  }
  render() {
    if (this.state.loading) {
      return (
        <div>
          loading....
        </div>
      )
    }
    else {
      return (
        <div className = "container">
          <div className = "image">
          <img src={image} alt="COVID-19" />
          </div>
          <div className = "components">
          <Card
          confirmed={this.state.confirmed}
          recovered={this.state.recovered}
          deaths={this.state.deaths}
          lastUpdate = {this.state.lastUpdated} />
          <h1>Statewise Data</h1>
          <CountryPicker
          confirmed = {this.state.confirmedState}
          recovered = {this.state.recoveredState}
          stateName = {this.state.stateName}
          
          />
          <h1>Datewise Data</h1>
          <Chart  
          confirmed={this.state.confirmed}
          recovered={this.state.recovered}
          deaths={this.state.deaths}
          dateWiseData = {this.state.dateWiseData}
          date = {this.state.date}
          dailyRecovery = {this.state.dateWiseRecovery}
          />
          
          </div>

        </div> 

      )
    }
  }
}


export default App;
