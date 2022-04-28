import React from 'react'
import data1 from '../data/data1'
import BlogItem from './BlogItem'


const Blog = () => {
    return (
        <div className="blog py-5">
            <div className="row d-flex justify-content-center align-items-center px-5 mt-5">
            {data1.blog.map((item,index)=>{
                        return(
                            <BlogItem
                            img={item.img}
                            title={item.title}
                            desc1={item.desc1}
                            desc2={item.desc2}
                            time={item.time}
                            text={item.text}
                            link={item.link}
                            item={item}
                            key={index}
                            />
                        )
                    })}
            </div>
      </div>
    )
}

export default Blog