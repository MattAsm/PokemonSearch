import { useState } from 'react';
import './App.css';
import PokemonComponent from './PokemonComponent';


function App() {

  return(
  <div className="pkmnHolder">
    <PokemonComponent api={"https://pokeapi.co/api/v2/pokemon/wingull"}/>
    <PokemonComponent api={"https://pokeapi.co/api/v2/pokemon/Centiskorch"}/>
    <PokemonComponent api={"https://pokeapi.co/api/v2/pokemon/Dreepy"}/>
    <PokemonComponent api={"https://pokeapi.co/api/v2/pokemon/mawile"}/>

  
  </div>
  );
}

export default App

function addComponent(){

}