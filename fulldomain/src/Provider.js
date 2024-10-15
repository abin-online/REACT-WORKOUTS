import React, { createContext, useState } from 'react'

const ThemeContext = createContext(true)

const Provider = ({ children }) => {

    const [theme, setTheme] = useState(true) //true for light theme
    const toggleTheme = ()=> {
        setTheme(!theme)
    }

  return (
        <>
            <ThemeContext.Provider value= {{theme , toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </>
    )
}

export {ThemeContext}

export default Provider
