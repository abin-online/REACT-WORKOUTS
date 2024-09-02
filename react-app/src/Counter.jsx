import React, {useState} from "react"

function Counter(){

    const [count, setCount] = useState(0)
    const [message , setMessage] = useState('')
    const increment = () => {
        if(count < 5){
            setCount(count + 1)
        }else{
            setMessage('Count cannot increase beyond 5')
        }
        
    }

    const decrement = () => {
        setCount(count - 1)
        setMessage('')
    }

    const reset = () => {
        setCount(0)
        setMessage('')
    }

    return(<div className="counter-container">
        <p className="count-display">{count} </p> 
        <button className="counter-button" onClick={increment}>INCREMENT</button>
        <button className="counter-button" onClick={reset}>RESET</button>
        <button className="counter-button" onClick={decrement}>DECREMENT</button>
        {message && <p>{message}</p>}
    </div>)
}

export default Counter