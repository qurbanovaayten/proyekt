import React, { useState } from 'react'
import data3 from '../data/data3'
import ProductItem1 from './ProductItem1'
import ProductItem2 from './ProductItem2'
import ProductItem3 from './ProductItem3'
import one from '../../assets/img/sekil5.jpeg'
import two from '../../assets/img/sekil6.jpg'
import three from '../../assets/img/sekil4.jpg'

import Slider from './Slider'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import data4 from '../data/data4'
import data5 from '../data/data5'
import { useTranslation } from 'react-i18next'
const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='home'>
         <header>
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={one} className="d-block w-100" alt="..." />
            <h3>Books have the power to transport us to new worlds and <br/>
              different times, 
              but they can also take us back to the <br/>important moments in our own lives.</h3>
          </div>
          <div className="carousel-item ">
            
            <img src={two} className="d-block w-100" alt="..." />
            
            
          </div>
          <div className="carousel-item">
            <img src={three} className="d-block w-100" alt="..." />
            <h1>a sentence every day</h1>
            <h2>Reading is good for you because it  <b> improves your focus, memory, empathy, and communication skills.</b></h2>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
         </header>

         <section className='section1 my-3'
        
         data-aos-anchor-placement="center-bottom">
                <div className="container"  >
                   <div className="d-flex flex-column align-items-center">
                   <h1>New Books</h1>
                    <p className='mt-3'>You're gonna need two hands to hold our toasted buns. Our fresh, juicy burgers are served up medium-well with a side of fries and a whole lot of flavor.</p>
                   </div>
                    <div className="row d-flex justify-content-around mt-4">
                        {data3.productData1.map((item,index)=>{
                            return(
                            <ProductItem1
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            item={item}
                            key={index}
                            />
                            )
                            })}
                    </div>
                </div>
         </section>
         <section className='section2 mt-3 py-5'>
                <div className="container">
                    <p className='best'>Best Seller</p>
                    <div className="row d-flex justify-content-center align-items-center">
                        {data5.productData1.map((item,index)=>{
                            return(
                            <ProductItem3
                            img={item.img}
                            title={item.title}
                            price={item.price}
                            star={item.star}
                            item={item}
                            key={index}
                            />
                            )
                            })}
                    </div>
   
                    
                </div>
            </section>
            <section className="section3 mt-3 py-5" >
              <div className="container">
                <Slider/>
              </div>
                      
            </section>

    </div>
  )
}

export default Home