import React, { useState } from 'react'
import Child from './Child'

function Parent() {

    const [child, setChild] = useState('')

    const handleChildData = (input) => {
        setChild(input)
    }

    return (
        <div>
            <h2>DATA FROM CHILD : {child}</h2>
            <Child sendDataToParent={handleChildData} />
        </div>
    )
}

export default Parent


// import React from 'react'
// import Child from './Child'
// const Parent = () => {
//     const Person = {
//         name: 'Abin',
//         age : 22
//     }
//   return (
//     <div>
//       <Child value = {Person}/>
//     </div>
//   )
// }

// export default Parent
