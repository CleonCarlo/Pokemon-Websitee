import React, { useEffect, useState } from 'react'
import './style.css';

const DetailsWrapper = ({pkName, pkId}) => {
    const [details, setDetails] = useState(null)
    const [error, setError] = useState('');
    // use name to call api and set details of the pokemon
    const getPokemonDetails = async() => {
      console.log('I am called !')
      try {
          const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkName}`)
          const data = await response.json()
          const {id, height, weight, name, title} = data
          console.log(data);
          //console.log(detailsObj)
          setDetails({ID:id, Height:height, Weight:weight, Name:name, Title:title})// when the variable and key name is same we can avoid writing it
      } catch (err) {
          console.log('Api call failed', err)
          setError(err);
          setDetails('');
      }
  }

  // calling the function in which we are setting the state directly inside the Component is not a good idea
  // getPokemonDetails()


  //calling the function in which we are setting the state directly inside the component is not a good idea
 //so well be using useEffect
  useEffect(()=>{
    getPokemonDetails()
  }, [pkName])

  return (
    <div className='details-wrapper' >
      <div>
        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkId}.png`} alt='pokemon-image' className='details-image'/>
      </div>
      {error? <div>{error}</div> : details?(<div className='feature-styling'>
       {/* looping thru an object */}
      {/* to convert object to an array */}
      {
        details && Object.keys(details).map((key)=><div>{key}: {details[key]}</div>)
      }
    </div>):'No Pokemon Selected'}</div>
  )
}

export default DetailsWrapper