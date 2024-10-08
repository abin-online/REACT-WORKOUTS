import React, { useContext } from 'react'
import { CounterContext } from './CounterProvider'

const CounterComponent = () => {
    const {count , increment , decrement , reset} = useContext(CounterContext)
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>0</button>  
    </div>
  )
}

export default CounterComponent
