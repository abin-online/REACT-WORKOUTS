import React from 'react'

const IncrementButton = React.memo(({increment}) => {

  return (
    <div>
      <button onClick={increment}>INCREMENT</button>
    </div>
  )
})

export default IncrementButton
