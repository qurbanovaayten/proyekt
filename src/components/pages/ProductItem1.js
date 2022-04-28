import React from 'react'
import { useCart } from 'react-use-cart'

const ProductItem = (props) => {
    const {addItem} = useCart();
    return (
        <div className="col-lg-5 col-md-10 col-10 product mt-2 " data-aos="fade-up">
          <img src={props.img} alt="err" />
          <div className="text pt-5">
            <p className="title">{props.title}</p>
            <p className="price">${props.price}</p>
            <button onClick={()=>addItem(props.item)}>ADD TO CART</button>
          </div>
      </div>
    )
}

export default ProductItem