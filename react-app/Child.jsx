import React from 'react'

const Child = ({value}) => {

    const {name , place} = value
    
  return (
    <div>
        <h3>Child Component</h3>
        <p>Name: {name}</p>
        <p>Place: {place}</p>
    </div>
  )
}

export default Child
