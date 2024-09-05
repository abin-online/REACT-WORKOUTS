import { useState } from "react"

function ChildComponent({setData}) {
    const[inputValue , setInputValue] = useState('')

    const handleInput = ()=>{
        setData(inputValue)
    }

    return(
        <div>
            <input type="text" onChange={(e)=> setInputValue(e.target.value)}/>
            <button onClick={handleInput}>Send Data To child</button>
        </div>
    )
}

export default ChildComponent