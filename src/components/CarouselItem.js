import React from "react"

function CarouselItem({anchorLink, imageUrl,textTitle,textPara}) {

    console.log(anchorLink)

    return (
        <div className="homepage-carousel-item">
            <img className="slider-image" src={imageUrl}/>
            <div className="carousel-text-box" >
                <p><a href={anchorLink} className="carousel-headings">{textTitle}</a></p>
                <p>{textPara}</p>
            </div>
        </div>

    )
}



export default CarouselItem