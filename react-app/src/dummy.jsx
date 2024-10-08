import React, { useReducer } from 'react'
const initialState = {
  count: 0
}

const reducer = (state , action)=>{
  switch(action.type){
    case 'INCREMENT' : return {count: state.count + 1}
    case 'DECREMENT' : return {count: state.count - 1}
    case 'RESET' : return {count : 0}
  }
}
const Dummy = () => {
  const [state , dispatch] = useReducer(reducer , initialState)
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=> dispatch({type: 'INCREMENT'})}>+</button>
      <button onClick={()=> dispatch({type: 'DECREMENT'})}>-</button>
      <button onClick={()=> dispatch({type: 'RESET'})}>0</button>
    </div>
  )
}

export default Dummy
