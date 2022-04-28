import React from 'react';
import { NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart'


const ProductItem3 = (props) => {

    const {addItem} = useCart();
  return( 
    <div className="col-lg-4 col-md-5 col-10 d-flex flex-column align-items-center" data-aos="flip-left">
        <img src={props.img} alt="err" />
        <div className="text">
             <p className="title">{props.title}</p>
             <div className="star">{props.star}</div>
             <p className="price">${props.price}</p>
             <button className='px-4 py-2' onClick={()=>addItem(props.item)}>Add To Cart 🛒</button>
        </div>
    </div>
    )
};

export default ProductItem3;