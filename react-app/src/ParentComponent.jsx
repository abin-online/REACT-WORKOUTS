import { useState } from "react"

import ChildComponent from "./ChildComponent"

function ParentComponent (){

    const[childData , setChildData] = useState('')

    const handleChildData = (data)=> {
        setChildData(data)
    }

    return(
        <div>
            <h3>Parent Component</h3>
            <ChildComponent setData={handleChildData}/>
            <h3>Data From Child : {childData}</h3>
        </div>
    )
}

export default ParentComponent