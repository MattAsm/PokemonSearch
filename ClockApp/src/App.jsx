import { useState } from 'react';
import './App.css';
import ClockComponent from './Clock-Component';


let timezone;
let datetime;

getTime("http://worldtimeapi.org/api/timezone/America/Toronto");

function App() {
      console.log(datetime + " is datetime");
  return(
  <div className="clockHolder">
    <ClockComponent city={timezone} time={datetime} zone="EST"/>
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>  
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>
  </div>
  );
}

export default App

function getTime(api){
  fetch(api)
  .then(response => response.json())
  .then(data => {
    timezone = data.timezone;
    datetime = data.datetime;
    console.log(datetime);
  });
}

