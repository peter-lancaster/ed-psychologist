import React from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import ContactFormik from "./components/ContactFormik"
import ContactHomeGrown from "./components/ContactHomeGrown"

function App() {
  return (
    <>
    <Header />
      <main>
        <Switch>
          <Route exact path ="/"><Home/></Route>
          <Route path ="/about"><About/></Route>
          <Route path ="/services"><Services/></Route>
          <Route path ="/contact-homegrown"><ContactHomeGrown/></Route>
          <Route path ="/contact-formik"><ContactFormik/></Route>
        </Switch>
      </main>
    <Footer />
    </>
  )
}

export default App;
