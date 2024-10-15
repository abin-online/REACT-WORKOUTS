import React from 'react'
import Counter from './Counter'
import Parent from './Parent'
import FocusInput from './FocusInput'
import Provider from './Provider'
import Consumer from './Consumer'
import RedCounter from './RedCounter'

const App = () => {
  return (
    <div style={{textAlign:'center'}}>
      <Counter/>
      <Parent/>
      <FocusInput/>
      <Provider>
        <Consumer/>
        
      </Provider>
      <RedCounter/>
    </div>
  )
}

export default App
