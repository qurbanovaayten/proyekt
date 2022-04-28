import React from 'react'
import {NavLink} from 'react-router-dom'
import {BiChevronRight} from 'react-icons/bi'
import data2 from '../data/data2'
import BlogDetailsItem from './BlogDetailsItem'
import { useTranslation } from 'react-i18next'

const BlogDetailsPage = ({match}) => {
    const { t } = useTranslation();   
    return (
        <div className='blogdetailspage'>
            <header>
                <div className="container py-5">
                   <h1 className='text-center'>Blog Details</h1>
                    <div className="text d-flex justify-content-center">
                        <NavLink to="/blog" className='navlink text-decoration-none'>Blog<BiChevronRight/></NavLink>
                        <p className='ms-2'>Blog Details</p>
                    </div>
                </div>
            </header>
            {(() => {
                if (match.params.id==1) {
                    return (
                        <div>
                    {data2.blog1.map((item,index)=>{
                        return(
                            <BlogDetailsItem
                             img={item.img}
                            title={t(item.title)}
                            text={t(item.text)}
                            item={item}
                            key={index}
                            />
                        )
                    })}
                        </div>
                    )
                }else if(match.params.id==2) {
                    return (
                        <div>
                        {data2.blog2.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                 img={item.img}
                                title={t(item.title)}
                                text={t(item.text)}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
}else if(match.params.id==3) {
                    return (
                        <div>
                        {data2.blog3.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                img={item.img}
                                title={t(item.title)}
                                text={t(item.text)}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
                }else if(match.params.id==4) {
                    return (
                        <div>
                        {data2.blog4.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                 img={item.img}
                                title={t(item.title)}
                                text={t(item.text)}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
                }else if(match.params.id==5) {
                    return (
                        <div>
                        {data2.blog5.map((item,index)=>{
                            return(
                                <BlogDetailsItem
                                 img={item.img}
                                title={t(item.title)}
                                text={t(item.text)}
                                item={item}
                                key={index}
                                />
                            )
                        })}
                            </div>
                    )
                }
            })()} 
        </div>
    )
}

export default BlogDetailsPage