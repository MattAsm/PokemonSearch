import { useState } from 'react';
import './App.css';
import ClockComponent from './Clock-Component';

function App() {
  return(
  <div className="clockHolder">
    <ClockComponent />
    <ClockComponent />  
    <ClockComponent />
    <ClockComponent />
  </div>
  );
}

export default App