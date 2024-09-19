import React, { useCallback, useMemo, useState } from 'react'

const ExpensiveFibonacci = () => {

  const [number , setNumber ] = useState(0)
  const [dark , setDark] = useState(false)

  const fib = useCallback((n)=> {
      if(n<=1) return 1
      return fib(n-1) + fib(n-2)
    
  })

  // const fiboNumber = useMemo(()=> { return fib(number)} , [number]) 
  const fiboNumber = fib(number)

  const theme = {
    backgroundColor : dark ? "black" : "white",
    color : dark ? "white" : "black"
  }



  return (
    <div style={theme}>
      <input type='number' value={number} onChange={(e)=> setNumber(parseInt(e.target.value))} />
      <button onClick={()=> setDark((curr)=> !curr)}>Toggle Theme </button>
      <h3>{fiboNumber}</h3>
      
    </div>
  )
}

export default ExpensiveFibonacci

