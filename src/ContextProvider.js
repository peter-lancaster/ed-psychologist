import React, {useState, useEffect} from "react" 
const Context = React.createContext()

function ContextProvider({children}) {

    const [isBurgerNav, setIsBurgerNav] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //setWindowWidth(window.innerWidth)

    function whichNavigation() {
        if (windowWidth < 1200) {
            setIsBurgerNav(true)
          } else {
            setIsBurgerNav(false)
          }
    }

    useEffect(() => whichNavigation(), [windowWidth])

    return (
        <Context.Provider value={{isBurgerNav}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider} 