import React, { useState } from 'react'

const Child = ({sendDataToParent}) => {

    const [input , setInput] = useState('')

    const handleSubmit = ()=> {
        sendDataToParent(input)
    }
  return (
    <div>
      <input onChange={(e)=> setInput(e.target.value)} value ={input}/>
      <button onClick={handleSubmit}>SEND</button>
    </div>
  )
}

export default Child


//  