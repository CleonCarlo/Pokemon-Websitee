import './App.css';
// https://pokeapi.co/api/v2/pokemon/

import React,{ useState } from "react";
import Container from "./component/DataContainer";
import InputBox from "./component/InputBox";
import PokemonLogo from "./component/Images/Pokemon-Logo.png";

function App() {
  //state management using useState hook
  const [searchToken, setSearchToken] = useState('')
  //JSX rendering
  return (
    <div className="App">
      <header className='header'>
        <img src={PokemonLogo} alt='pokemon logo image' className='image'/>
      </header>
      {/* rendering input component */}
       <InputBox setSearchToken={setSearchToken}/> {/*this will help in updating searchToken */}
      {/* rendering container component */}
      <Container searchToken={searchToken}/>  {/* Help in accessing the current value of searchToken*/}
    </div>
  );
}

export default App;

// In summary, the application follows a modular approach where different components are used to handle different aspects of the UI and data management. The App component is the main container that renders the InputBox and DataContainer components. The DataContainer component manages the layout of the Pokémon data display using CardWrapper and DetailsWrapper. The CardWrapper component fetches Pokémon data and renders a list of cards using the Card component. The Card component represents a visual card for a Pokémon and handles interactions. The DetailsWrapper component displays details of a selected Pokémon and logs information for debugging. Together, these components create a dynamic and interactive Pokémon data display application.