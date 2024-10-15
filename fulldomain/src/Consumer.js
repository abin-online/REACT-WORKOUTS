import React, { useContext } from 'react'
import { ThemeContext } from './Provider'

const Consumer = () => {
   
    const {theme , toggleTheme} = useContext(ThemeContext);

  return (
    <div style={{background: theme ? 'white' : 'black' , color : theme ? 'black' : 'white', textAlign: 'center' , padding: '30px'}}>
        <p>Theme is changing</p>
        <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  )
}

export default Consumer
