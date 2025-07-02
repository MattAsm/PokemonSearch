import './componentStyle.css';
import { useEffect, useState } from 'react';

function BlankComponent(props){

  
    return(     
    <div className="pkmn">
        <h2>{pkmnName}</h2>
        <img src={sprite} alt="" />
        <h6>{pkmnTypes}</h6>
    </div>
    );
}
export default BlankComponent;