import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import one from '../../assets/img/h.png'
import data3 from '../data/data3'
import ProductItem2 from "./ProductItem2";

export default class Responsive extends Component {
  render() {
    var settings = {
        speed: 500,
        slidesToShow: 2,
        infinite: true,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              infinite: true,
            }
          },
          {
            breakpoint: 995,
            settings: {
              slidesToShow: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 1,
            }
          }
        ]
      };
    return (
      <div className="slider">
        <h2> My Book  </h2>
        <Slider {...settings}>
              {data3.productData1.map((item,index)=>{
                return(
                  <ProductItem2
                  img={item.img}
                  title={item.title}
                  price={item.price}
                  star={item.star}
                  item={item}
                  key={index}
                  />
                  )
                  })}
            </Slider>
      </div>
    );
  }
}