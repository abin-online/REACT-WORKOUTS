import React from 'react'
import Container2 from './Container2'
import { useState } from 'react'
import { createContext } from 'react'

export const ThemeContext = createContext()

const Container1 = () => {
    const [theme , setTheme ] = useState('light')

    const changeTheme = ()=> {
        setTheme((theme)=> theme=== 'light' ? 'dark' : 'light');
    }
   
  return (
    <ThemeContext.Provider value={{theme}}>
        <button onClick={changeTheme}>Change Theme</button>
        <h1>Container 1</h1>
        <Container2/>
    </ThemeContext.Provider>
  )
}

export default Container1
