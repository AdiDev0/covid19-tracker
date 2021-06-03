import React, { Component } from 'react'
import { Card , CardContent , Typography , Grid} from '@material-ui/core';
import styles from './Card.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

function card(props) {
    // console.log(props.lastUpdate)

    // return (
    //     <div className="App">
    //         <h1>COVID CASES</h1>
    //         <section className="section">
    //             <div className="value">
    //                 Total cases = {props.confirmed}
    //             </div>
    //             <div className="value">
    //                 Total recoveries = {props.recovered}
    //             </div>
    //             <div className="value">
    //                 Total deaths = {props.deaths}
    //             </div>
    //         </section>
    //     </div>
    // )
    return(
        <div className= {styles.container , styles.width}>
            <Grid container spacing = {4} justify = "centre">
                {/* /* xs and md makes it responsive for extra small device and medium device */ }
                <Grid item component= {Card} xs = {12} md = {3} className = {cx(styles.card , styles.infected)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant= "h5">
                            <CountUp 
                            start = {0} 
                            end = {props.confirmed} 
                            duration = {2.5} 
                            seperator = ","
                            />
                        </Typography>
                        <Typography color = "textSecondary">
                         Last updated : {props.lastUpdate}
                        </Typography>
                        <Typography variant = "body2">
                            Number of active cases of COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component= {Card} xs = {12} md = {3} className = {cx(styles.card , styles.recovered)}>
                    <CardContent>
                        <Typography color = "text Secondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant= "h5">
                            <CountUp 
                            start = {0} 
                            end = {props.recovered} 
                            duration = {2.5} 
                            seperator = ","
                            />
                        </Typography>
                        Last updated : {props.lastUpdate}
                        <Typography variant = "body2">
                            Number of recoveries from COVID-19
                        </Typography>
                    </CardContent>

                </Grid>
                <Grid item component= {Card} xs = {12} md = {3} className = {cx(styles.card , styles.deaths)}>
                    <CardContent>
                        <Typography color = "textSecondary" gutterBottom>
                            Deaths
                        </Typography>
                        <Typography variant= "h5">
                            <CountUp 
                            start = {0} 
                            end = {props.deaths} 
                            duration = {2.5} 
                            seperator = ","
                            />
                        </Typography>
                        Last updated : {props.lastUpdate}
                        <Typography variant = "body2">
                            Number of deaths caused by COVID-19
                        </Typography>
                    </CardContent>

                </Grid>

            </Grid>
        </div>
    )
}
export default card;