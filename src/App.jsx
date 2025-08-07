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
  <h1 id='title'>Pokémon Search</h1>
   <div id="searchBarDiv">
      <input type="text" placeholder='Pokémon Name:' id="nameSearch"
      onKeyDown={event => {
        if (event.key === 'Enter') {
          document.getElementById('search')?.click();
        }
      }} />

      <button id="search" onClick={() => handleSearch()} >SEARCH</button>
    </div>

  <div className="pkmnHolder">
    {searchArr.length === 0 ? 
    (<PokemonComponent key={1} api={`https://pokeapi.co/api/v2/pokemon/pikachu`} />) : (
    searchArr.map(pkmn => ( <PokemonComponent key={pkmn.name} api={`https://pokeapi.co/api/v2/pokemon/${pkmn.name}`} />))
   )}

  </div>
  </>);
}

export default App



//For unreleased feature... might not add
function fillTypes(){
  const types = ["Normal", "Fire", "Water", "Grass", "Flying", "Fighting", "Poison", "Electric", "Ground", "Rock", "Psychic", "Ice", "Bug", "Ghost", "Steel", "Dragon", "Dark", "Fairy"];

 return types.map((type) => (<option key={type} value={type}>{type}</option>));
}