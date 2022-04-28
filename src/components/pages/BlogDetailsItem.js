import React from 'react'

const BlogDetailsItem = (props) => {
  return (
    <div className="details py-5">
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div className=" px-5 col-lg-7 col-md-10 col-10 bg d-flex align-items-center">
                <img src={props.img} alt="err" />
            </div>
            <div className="col-lg-5 col-md-10 col-10">
                <p className='p1'>About the Book</p>
                <h1>{props.title}</h1>
                <p className='p2'>{props.text}</p>
            </div>
        </div>
     </div>
</div>
  )
}

export default BlogDetailsItem