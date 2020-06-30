import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselItem from "./CarouselItem"
import LeftArrow from "./LeftArrow"

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
    cssEase: "linear",
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />
  };

   function NextArrow(props) {
    const { className, style, onClick } = props;

    //console.log(className) //slick-arrow slick-next
    //console.log(style) // {display : "block"}
    //console.log(onClick) // ƒ clickHandler(options, e) {
                          //   if (e) {
                          //     e.preventDefault();
                          //   }

                          //   this.props.clickHandler(options, e);
                          // }

    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
    );
  }
  
  function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block"}}
        onClick={onClick}
      >
         <i className="ri-arrow-left-circle-fill"></i>
      </div>
    );
  }


  return (
    <div>
        <Slider {...settings}>
          <CarouselItem 
          anchorLink={"react-ed-psychologist/about"}
          imageUrl={"https://www.parentspartner.com/wp-content/uploads/2011/06/angry-child-boy.jpg"} 
          textTitle={"Educational psychologist"}
          textPara={"Jenny Wilson is a Consultant Educational Psychologist who provides independent assessments of children with special educational needs."}
          />
          <CarouselItem 
          anchorLink={"react-ed-psychologist/services"}
          imageUrl={"https://i1.wp.com/lindastade.com/wp-content/uploads/2018/06/shutterstock_141082792-2-e1542560322233.jpg?resize=1024%2C640&ssl=1"} 
          textTitle={"Autism and ADHD strategies"}
          textPara={"Some text here about the treatment of autism"}
          />
          <CarouselItem 
          anchorLink={"react-ed-psychologist/services"}
          imageUrl={"https://www.gannett-cdn.com/media/2018/05/14/USATODAY/usatsports/wp-USAT-allthemoms-front1-20750-temper24.png?width=1080&quality=50"} 
          textTitle={"Innovative work in the field of Child Psychology"}
          textPara={"Some text here about work in the field of child psychology"}
          />
      </Slider>
    </div>
  );

}


export default HomePageCarousel