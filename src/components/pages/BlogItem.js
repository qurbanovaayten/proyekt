import React from 'react'
import {VscDebugBreakpointData} from 'react-icons/vsc'

const BlogItem = (props) => {
  return (
    <div className="col-lg-3 mx-3 mt-4 col-md-5 col-10 d-flex flex-column justify-content-between miniblog" data-aos="flip-right">
    <img src={props.img} alt="err" />
    <div className="text py-2 d-flex flex-column align-items-center">
      <p className="p1">{props.desc1} <VscDebugBreakpointData/> {props.desc2} </p>
      <h4>{props.title}</h4>
      <p className="time">{props.time} </p>
      <div className="p2">{props.text}</div>
      <div className="icons">

      <div className="end">
         {props.link}
      </div>
    </div>
    </div>
  </div>
  )
}

export default BlogItem