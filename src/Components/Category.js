import React from 'react'
import Advertisement from './Advertisement'

const Category = ({ content }) => {
    return (
        <>
            {/* <div className='text-left mt-5  text-2xl border-2'> */}
                {/* <span className='font-bold underline'>Tourism</span>
                <span className='font-bold underline'>Top Posts</span> */}
                <div className="big_container">
                    <div className='category_container flex'>
                        <img className='rounded-xl w-1/5 h-1/5' src={content.imageUrl} alt="" />
                        <span><h1>{content.title}</h1>
                            <p>{content.description}</p>
                            <h2> {content.category}/<span className='badge rounded-pill bg-danger'>{content.date}</span>  </h2></span>
                    {/* </div> */}
                </div>
                {/* <div className='category_container-two flex ' >
                    <img className='rounded-xl ' src={content.imageUrl} alt="" />
                    <span><h1>{content.title}</h1>
                        <h2 > {content.category} / <span className='badge rounded-pill bg-danger'> {content.date}</span>  </h2></span>
                </div> */}
                
            </div>


        </>
    )
}

export default Category
