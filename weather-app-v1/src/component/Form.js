import React from "react";

const Form = (props) => (
  <div>
    <form onSubmit={props.getWeather}>
      <input type="text" name="city" placeholder="Type a city name..."/>
      <input type="text" name="country" placeholder="Type a country name"/>
      <button>Get Weather</button>
    </form></div>
);

export default Form;
