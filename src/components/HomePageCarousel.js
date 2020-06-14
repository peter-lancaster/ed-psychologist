import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem"

function HomePageCarousel() {
    
// https://www.todaysparent.com/wp-content/uploads/2014/03/TP04_Steps_LittleKid-300x300.jpg
// "http://www.markmerrill.com/wp-content/uploads/2018/10/10-18-18-angry-child.jpg"
// https://www.gannett-cdn.com/media/2018/05/14/USATODAY/usatsports/wp-USAT-allthemoms-front1-20750-temper24.png?width=1080&quality=50

const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };

  return (
    <div className="homepage-carousel">
        <Slider {...settings}>
          <CarouselItem 
          imageUrl={"https://www.gannett-cdn.com/media/2018/05/14/USATODAY/usatsports/wp-USAT-allthemoms-front1-20750-angrychild.jpg?width=1080&quality=50"} 
          textTitle={"Educational psychologist"}
          textPara={"Jenny Smith is a Consultant Educational Psychologist who provides independent assessments of children with special educational needs."}
          />
          <CarouselItem 
          imageUrl={"http://www.markmerrill.com/wp-content/uploads/2018/10/10-18-18-angry-child.jpg"} 
          textTitle={"Autism Disorders"}
          textPara={"Some text here about the treatment of autism"}
          />
          <CarouselItem 
          imageUrl={"https://www.gannett-cdn.com/media/2018/05/14/USATODAY/usatsports/wp-USAT-allthemoms-front1-20750-temper24.png?width=1080&quality=50"} 
          textTitle={"Innovative work in the field of Child Psychology"}
          textPara={"Some text here about work in the field of child psychology"}
          />
      </Slider>
    </div>
  );

    // return (
    //     <div>
    //     <Slider {...settings}>
    //       <div >
    //         <img className="slider-image" src="https://www.todaysparent.com/wp-content/uploads/2014/03/TP04_Steps_LittleKid-300x300.jpg" />
    //       </div>
    //       <div>
    //         <img className="slider-image" src="http://www.markmerrill.com/wp-content/uploads/2018/10/10-18-18-angry-child.jpg"/>
    //       </div>
    //       <div>
    //         <img  className="slider-image"src="https://www.gannett-cdn.com/media/2018/05/14/USATODAY/usatsports/wp-USAT-allthemoms-front1-20750-temper24.png?width=1080&quality=50"/>
    //       </div>
    //     </Slider>
    //   </div>
    // )
}


export default HomePageCarousel