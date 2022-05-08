import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import TopPost from './TopPost'
import Advertisement from './Advertisement'

const Articles = () => {
    const [data] = useContext(ContextApi)
    return (
        <>
            <div className='text-left mt-5  text-2xl '>
                <span className='font-bold underline'>Latest </span>
                <span className='font-bold underline'>Articles</span>
                <div className='flex'>
                    <div className='mt-4 grid grid-rows-5 gap-5 w-1/5 h-1/5'>
                        {
                            data.filter(
                                d => d.id === "1" && (d.category === "tourism" || d.category === "fitness" || d.category === "food" || d.category === "hollywood" || d.category === "technology")
                            ).map(
                                (e, index) => <img key={index} src={e.imageUrl} alt={e.title} className='rounded-2xl' />

                            )
                        }
                        {
                            data.filter(
                                d => d.id === "1" && (d.category === "tourism" || d.category === "fitness" || d.category === "food" || d.category === "hollywood" || d.category === "technology")
                            ).map(
                                (e, index) => <div className="article_content" key={index}>
                                    <h1>{e.title}</h1>
                                    <p>{e.short}</p>
                                    <h2> <span>{e.category}</span> / <span className='badge rounded-pill bg-danger text-white'>{e.date}</span>  </h2>
                                </div>

                            )
                        }
                    </div>
                    <TopPost />
                </div>
            </div>
        </>
    )
}

export default Articles