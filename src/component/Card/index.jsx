import React, { useEffect, useState } from 'react'
import './style.css';

const Card = ({name, id, setName,setId}) => {
  const [imgUrl, setImgUrl] = useState('')
  useEffect(()=>{
    setImgUrl(`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`)
  }, [id])

  const handleClick = () =>{
    myName();
    identity();
  }

  const myName = () =>{
    setName(name);
  }
  
  const identity = () =>{
     setId(id);
  }

  return (
    <div className='card-styling' onClick={handleClick}>
        <div>
            {imgUrl && <img src={imgUrl} alt={`${name.toUpperCase()} Image`}/>}
        </div>
        <div>
            <p className='para'>{name.toUpperCase()}</p>
        </div>
    </div>
  )
}

export default Card;