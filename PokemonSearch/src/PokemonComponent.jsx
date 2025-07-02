import './componentStyle.css';
import { useEffect, useState } from 'react';

function PokemonComponent(props){

    const [pkmnName, setPkmnName] = useState("");
    const [sprite, setSprite] = useState(null);
    const [pkmnTypes, setTypes] = useState([]);

   useEffect(() => {
    fetch(props.api)
        .then(response => response.json())
        .then(data => {
            setPkmnName(data.name.charAt(0).toUpperCase() + data.name.slice(1));
            setSprite(data.sprites.front_default);
            setTypes(data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1) + " "); //Sets and capitalizes, could be more readable with 2 or 3 lines but i prefer it this way for now
            if(data.types.length === 2){
                setTypes(firstType => [...firstType, data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1) + " "]);
            }
        })
        .catch(error => {
           console.error("Error fetching pokemon:", error);
        })
}, []);

    return(     
    <div className="pkmn">
        <h2>{pkmnName}</h2>
        <img src={sprite} alt="" />
        <h6>{pkmnTypes}</h6>
    </div>
    );
}
//For now im hard coding toronto to make sure i can get it to work. Then pass api key
export default PokemonComponent;