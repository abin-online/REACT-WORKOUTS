import React, { useReducer } from 'react'

const initialState = {
    count : 0
}

const reducer = (state , action) => {
    switch(action.type) {
        case 'INCREMENT' : return {
            count : state.count + 1
        }
        case 'DECREMENT' : return {
            count : state.count - 1
        }
    }
}


const ReduceCounter = () => {

const [state , dispatch ] = useReducer( reducer , initialState )

  return (
    <div>
        <h1>{state.count}</h1>
      <button onClick = {()=> dispatch({type: 'INCREMENT'})}>INCREMENT</button>
      <button onClick = {()=> dispatch({type: 'DECREMENT'})} >DECREMENT</button>
    </div>
  )
}

export default ReduceCounter
