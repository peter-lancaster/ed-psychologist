import React from "react"

function CarouselItem({imageUrl,textTitle,textPara}) {

    return (
        <div className="homepage-carousel-item">
            <img className="slider-image" src={imageUrl}/>
            <div className="carousel-text-box" >
                <p className="medium-heavy-font">{textTitle}</p>
                <p>{textPara}</p>
            </div>
        </div>

    )
}



export default CarouselItem