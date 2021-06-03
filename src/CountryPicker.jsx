import React, {  useState } from 'react'
import reactDom from 'react-dom';
import { NativeSelect, FormControl } from '@material-ui/core';
import styles from './CountryPicker.css'
import CPchart from './CPchart'
import Select from 'react-select'

function CountryPicker(props){

   
        const data = [];
        for(var i = 0; i<38 ; i++){
            data[i] = {
                value: i,
                label : props.stateName[i],
                confirmed : props.confirmed[i],
                recovered : props.recovered[i],
                
            }
        }
        const[selectedValue , setselectedValue] = useState(data[0])
    
        const handleChange = obj => {
            setselectedValue(obj);
        }
        
        const object = selectedValue;
        // console.log(object)

        
        return(
           <div className = "selector">
             <Select
             value = {selectedValue}
             options = {data}
             onChange = {handleChange}
            />
            <div>
            <CPchart
            selectedValue = {object}
            
            />
            </div>
            </div>
        )
      
    
}

export default CountryPicker