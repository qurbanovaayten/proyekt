import React from 'react';
import { useCart } from 'react-use-cart'


const ProductItem2 = (props) => {
    const {addItem} = useCart();
  return (
    <div>
        <div className='item d-flex  align-items-center justify-content-around pe-5 ms-4'>
            <img src={props.img} />
            <div className="text">
                <p className="title" id='title'>{props.title}</p>
                <div className="star">{props.star}</div>
                <p className="price">${props.price}</p>
                <button onClick={()=>addItem(props.item)}>ADD TO CART🛒</button>
            </div>
        </div >
    </div>
    )
};

export default ProductItem2;