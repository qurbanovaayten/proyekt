import React from 'react'
import Slider from '../pages/Slider'
import first from '../../assets/img/r.jpg'
import second from '../../assets/img/i.jpg'
import third from '../../assets/img/q.jpg'
import { useCart } from 'react-use-cart'
import data6 from '../data/data6'
import ProductItem4 from './ProductItem4'


const Contact = (props) => {
  const {addItem} = useCart();
  return (
    <div className='contact'>
      
      <Slider/> 

     <section className='section2 my-3 '> 
     <div className="container">
     <div className="gun d-flex justify-content-beween">
     {data6.product.map((item,index)=>{
                            return(
                            <ProductItem4
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

    </div>
     

  )
}

export default Contact