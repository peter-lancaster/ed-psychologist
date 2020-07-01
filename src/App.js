import React, {useContext} from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import ContactFormik from "./components/ContactFormik"
import ContactHomeGrown from "./components/ContactHomeGrown"
import MobileHeader from "./MobileHeader"
import MobileFooter from "./MobileFooter"
import {Context} from "./ContextProvider"

function App() {

  const {isMobileNav, isMobileFooter} = useContext(Context)

  let whichHeader = ""
  let whichFooter = ""

  if (isMobileNav) {
    whichHeader = <MobileHeader />
  } else {
    whichHeader = <Header />
  }

  if (isMobileFooter) {
    whichFooter = <MobileFooter />
  } else {
    whichFooter = <Footer />
  }

  return (
    <>
      
     {whichHeader}
      <main>
        <Switch>
          <Route exact path ="/"><Home/></Route>
          <Route path ="/about"><About/></Route>
          <Route path ="/services"><Services/></Route>
          <Route path ="/contact-homegrown"><ContactHomeGrown/></Route>
          <Route path ="/contact-formik"><ContactFormik/></Route>
        </Switch>
      </main>
    {whichFooter}
    </>
  )
}

export default App;
