import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from './Container1'

const Container3 = () => {
    const {theme} = useContext(ThemeContext)
    const textStyle = {
        backgroundColor : theme === 'light' ? 'black': 'white',
        color: theme === 'light' ? 'white' : 'black'
    }
    
  return (
    <div>
            <h6 style={textStyle}>Container 3</h6>  
    </div>
  )
}

export default Container3
