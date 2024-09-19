import React from 'react'
import Child from '../Child'

const Parent = () => {

    const Person = {
        name: "Abin",
        place: "Chennai"
    }
  return (
    <div><h1>Parent Component</h1>
      <Child value={Person}/>
    </div>
  )
}

export default Parent
