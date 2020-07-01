import React, {useState, useEffect} from "react" 
const Context = React.createContext()

function ContextProvider({children}) {

    const [isMobileFooter, setIsMobileFooter] = useState(false)
    const [isMobileNav, setIsMobileNav] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    //setWindowWidth(window.innerWidth)

    window.addEventListener("resize", whichNavigation)
    window.addEventListener("resize", whichFooter)

    function whichNavigation() {

        setWindowWidth(window.innerWidth)

        if (windowWidth < 1110) {
            setIsMobileNav(true)
          } else {
            setIsMobileNav(false)
          }
    }

    function whichFooter() {

        setWindowWidth(window.innerWidth)

        if (windowWidth < 570) {
            setIsMobileFooter(true)
          } else {
            setIsMobileFooter(false)
          }
    }

    useEffect(() => {
        whichNavigation()
        whichFooter()
    }, [])

    return (
        <Context.Provider value={{isMobileNav, isMobileFooter}}>
            {children}
        </Context.Provider>
    )
}

export {Context, ContextProvider} 