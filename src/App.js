import React from 'react';
import './App.css';
import Header from "./Header"
import Footer from "./Footer"
import {Switch, Route} from "react-router-dom"
import Home from "./components/Home"
import About from "./components/About"
import Services from "./components/Services"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="page-container">
    <Header />
      <Switch>
        <Route exact path ="/"><Home/></Route>
        <Route path ="/about"><About/></Route>
        <Route path ="/services"><Services/></Route>
        <Route path ="/contact"><Contact/></Route>
      </Switch>
     <Footer />
    </div>
  )
}

export default App;
