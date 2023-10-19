import React, { useState } from 'react'
import CardWrapper from '../CardWrapper'
import DetailsWrapper from '../DetailsWrapper'
import './style.css';

const Container = ({searchToken}) => {
  //since this is common between cardwrapper and detailswrapper
  const [name, setName] = useState('')
  const [id, setId] = useState('');
  return (
    <div className='container'>
        <CardWrapper setName={setName} searchToken={searchToken} setId={setId}/>
        <DetailsWrapper pkName={name} pkId={id}/> {/*name well pass it to detailsWrapper */}
    </div>
  )
}
export default Container;