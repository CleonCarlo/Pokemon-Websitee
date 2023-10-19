import React, { useState } from 'react'
import './style.css';

const InputBox = ({setSearchToken}) => {
  const [searchValue, setSearchValue] = useState('')
  
  return (
    <div className='input-div'>
        <input value={searchValue} onChange={(e)=>{setSearchValue(e.target.value)}} className='input-box'/>{/*value is used to ensure that input field will reflect current value of searchValue*/}
        <button onClick={()=>{setSearchToken(searchValue); setSearchValue('')}} className='submit'>Search</button> {/*this line updates searchToken through setSearchToken function*/}
        <button onClick={()=>{setSearchToken(''); setSearchValue('')}} style={{display:`${setSearchToken?'block':'none'}`}} className='reset-button'>Reset</button> 
    </div>
  )
}

export default InputBox