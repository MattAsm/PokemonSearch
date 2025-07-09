import { useState,useEffect } from 'react';
import './App.css';
import PokemonComponent from './PokemonComponent';

function App() {

  const [searchArr, setSearchArr] = useState([]);

const handleSearch = () => 
{
  setSearchArr([]);
  const nameSearch = document.getElementById("nameSearch").value;

  fetch("https://pokeapi.co/api/v2/pokemon/?limit=1302")
  .then(response => response.json())
  .then(data => { 
    setSearchArr(data.results.filter(pkmn => (pkmn.name.includes(nameSearch.toLowerCase())) ) );
  });
}

  return(<>
   <div id="searchBarDiv">
      <input type="text" placeholder='Name' id="nameSearch"/>
{/* <select name="type1" id="type1">
        <option value="">Type</option>
        {fillTypes()}
      </select>

      <select name="type2" id="type2">
        <option value="">Type</option>
        {fillTypes()}
      </select>
*/}
      <button id="search" onClick={() => handleSearch()}>SEARCH</button>
    </div>

  <div className="pkmnHolder">
    {searchArr.map(pkmn => (
      <PokemonComponent key={pkmn.name} api={`https://pokeapi.co/api/v2/pokemon/${pkmn.name}`} />
    ))}
  </div>
  </>);
}

export default App


function fillTypes(){
  const types = ["Normal", "Fire", "Water", "Grass", "Flying", "Fighting", "Poison", "Electric", "Ground", "Rock", "Psychic", "Ice", "Bug", "Ghost", "Steel", "Dragon", "Dark", "Fairy"];

 return types.map((type) => (<option key={type} value={type}>{type}</option>));
}
