import './componentStyle.css';
import { useEffect, useState } from 'react';

function clockComponent(props){
   const api = "http://worldtimeapi.org/api/timezone/America/Toronto";//props.api;

   const [timezone, setTimezone] = useState(null);

   useEffect(() => {
    fetch(api)
        .then(response => console.log(response))
        .then(data => {
            console.log(data.timezone);
            setTimezone(data.timezone)
        })
        .catch(error => {
           console.error("Error fetching timezone:", error);
           setTimezone("Error fetching timezone");
        })
}, []);

    return(     
    <div className="clock">
        <h2>Timezone: {timezone}</h2>
        <h1>12:00:00</h1>
        <h6>EST</h6>
    </div>
    );
}
//For now im hard coding toronto to make sure i can get it to work. Then pass api key
export default clockComponent;