import React, {useState, useEffect} from "react" 
const Context = React.createContext()

function ContextProvider({children}) {

    const [isBurgerNav, setIsBurgerNav] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //setWindowWidth(window.innerWidth)

    

    window.addEventListener("resize", whichNavigation)

    function whichNavigation() {

        //console.log("in whichNavigation")

        setWindowWidth(window.innerWidth)

        if (windowWidth < 1200) {
            setIsBurgerNav(true)
          } else {
            setIsBurgerNav(false)
          }
    }

    //useEffect(() => whichNavigation(), [])

    return (
        <Context.Provider value={{isBurgerNav}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider} 