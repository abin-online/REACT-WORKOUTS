import React, { useReducer } from "react";

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
  }
};

const RedCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (<div>
    <h1>{state.count}</h1>
    <button onClick={()=> dispatch({type: 'increment'})}>INCREMENT</button>
    <button onClick={()=> dispatch({type: 'reset'})}>RESET</button>
    <button onClick={()=> dispatch({type: 'decrement'})}>DECREMENT</button>
  </div>);
};

export default RedCounter;

