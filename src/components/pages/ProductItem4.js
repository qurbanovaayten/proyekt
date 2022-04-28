import React from 'react'
import { useCart } from 'react-use-cart';

const ProductItem4 = (props) => {
    const {addItem} = useCart();
  return (
    <div className="card" style={{width: '18rem'}}>
         <img src={props.img} className="card-img-top" alt="..." />
       <div className="card-body">
         <h5 className="card-title">{props.title}</h5>
         <div className='d-flex justify-content-between'><h4>{props.price}</h4>
         
         <a href="#" className="btn btn-primary "onClick={()=>addItem(props.item)}>Add to Card</a></div>
         </div>
       </div>
  )
}

export default ProductItem4