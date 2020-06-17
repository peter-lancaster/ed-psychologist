import React from "react"
import HomePageCarousel from "./HomePageCarousel"

function Home() {
    return (
    <div className="homepage-main">
        <div >
            <HomePageCarousel /> 
        </div>
        <div className="homepage-welcome-message">
            <h1>Welcome to the website of Jenny Smith, fully accredited Educational Psychologist.</h1>
            <p>Jenny Smith is a Specialist Consultant Educational Psychologist. </p>
            <p>Jenny Smith is an acknowledged specialist in Pathological Demand Avoidance Syndrome.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
            <p>Jenny Smith is an expert in this other thing also.</p>
        </div>
    </div>
    )
}

export default Home