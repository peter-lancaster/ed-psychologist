import React from "react"

function CarouselItem({imageUrl,textTitle,textPara}) {

    return (
        <div className="homepage-carousel-item">
            <img className="slider-image" src={imageUrl}/>
            <div className="carousel-text-box" >
                <h1>{textTitle}</h1>
                <p>{textPara}</p>
            </div>
        </div>

    )
}



export default CarouselItem