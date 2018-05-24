//
import React, { Component } from 'react';
import './App.css';

import Titles from './component/Titles.js';
import Form from './component/Form.js';
import Weather from './component/Weather.js';

const API_KEY = '';

class App extends React.Component {

  state = {
            temperature : undefined,
            humidity    : undefined,
            description : undefined,
            error : undefined,
            city : undefined,
            country : undefined
  };
  getWeather = async (e) =>{
    e.preventDefault();
    const city = e.target.city.value;
    const country = e.target.country.value;
    if (city && country) {
      const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
      const data = await API_CALL.json();
    //console.log(data.message);
    if(data.message){
      this.setState ({temperature:undefined,humidity:undefined,
                     description:undefined,
                     city:undefined, country:undefined, error:"Please enter valid input"});
    } else {
       this.setState ({temperature:data.main.temp,humidity:data.main.humidity,
                      description:data.weather[0].description,
                      city:data.name, country:data.sys.country, error:''});
      }
    } else this.setState({temperature:undefined,humidity:undefined,
                   description:undefined,
                   city:undefined, country:undefined, error:"Please enter valid input"});
  }

// render returns jsx
// babel behind the scenes to convert this js into html
 render(){
  return (<div>
              <div className="wrapper">
                <div className="main">
                  <div className="container">
                    <div className="row col-xs-12">
                     <div className="col-xs-5 title-container">
                       <Titles/>
                     </div>
                     <div className="col-xs-7 form-container">
                         <Form getWeather={this.getWeather}/>
                         <Weather
                         temperature = {this.state.temperature}
                         humidity = {this.state.humidity}
                         description = {this.state.description}
                         error = {this.state.error}
                         city = {this.state.city}
                         country = {this.state.country}/>
                     </div>
                    </div>
                  </div>
                </div>
              </div>
         </div>);
 }
}



export default App;
