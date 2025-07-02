import { useState } from 'react';
import './App.css';
import ClockComponent from './Clock-Component';

function App() {
  return(
  <div className="clockHolder">
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>  
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>
    <ClockComponent city="Toronto" country="Canada" time="12:00:00" zone="EST"/>
  </div>
  );
}

export default App