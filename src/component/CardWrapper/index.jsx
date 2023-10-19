import React, { useEffect, useState } from 'react'
import Card from '../Card'
import './style.css';

const CardWrapper = ({setName, searchToken, setId}) => {
   //we are using a hook since data keeps changing
   const [pokemons, setPokemons]  = useState(null)//holds array of pokemon data retrieved from api, holds the cards
   const [error, setError] = useState('');// used to store error message if there is an issue with api
  

   const getPokemons = async() => {
    //error handling
    try {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon/')
      const data = await response.json()
      //sice we require results from browser
      console.log(data.results);
      setPokemons(data.results)
      // console.log(data);
    } catch (err) {
      setError('Something is wrong!!!')
      setPokemons(null)
  }
 
}


  //Calling the api once so useEffect
  useEffect(()=>{
    getPokemons()
}, [])

return (
  <div className='wrapper-styling'>
       {/* Rendering the pokemons */}
       {error ?<div>{error}</div> :!pokemons?
        <div>Loading...</div>
        :pokemons.length===0?
        <div>No Pokemon Found!!</div>
        :pokemons.filter((pokemon)=>(!searchToken || pokemon.name === searchToken)).map((pokemon, index)=><Card key={pokemon.name} id={index} name={pokemon.name} setName={setName} setId={setId}/>)}
    </div>
  )
}

export default CardWrapper