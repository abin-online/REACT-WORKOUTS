import React, { useReducer } from 'react'

const initialState = { count : 0}

const reducer = (state , action)=> {
    switch(action.type){
        case 'increment' : 
            return {count : state.count+1}
        case 'decrement' : 
            return {count : state.count - 1}
        case 'reset' :
            return {count : 0}
        default :
            return  {count: state.count}
    }
}


const RedCounter = () => {
    const [state , dispatch] = useReducer(reducer , initialState)

  return (
    <div style={{ textAlign: 'center', margin: '100px', padding: '80px', border: '1px solid black'  }}>
        <h5>COUNTER APP USING USE REDUCER HOOK</h5>
        <h1 style={{fontWeight: 'bolder'}} >{state.count}</h1>
      <button onClick ={()=> dispatch({type : 'increment'})}>+</button>
      <button onClick ={()=> dispatch({type : 'reset'})}>0</button>
      <button onClick ={()=> dispatch({type : 'decrement'})}>-</button>
    </div>
  )
}

export default RedCounter
