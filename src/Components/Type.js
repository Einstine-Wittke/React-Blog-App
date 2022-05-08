import React from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import Category from './Category'
import { Link } from 'react-router-dom'
import Advertisement from './Advertisement'

const Type = () => {
    const { category } = useParams();
    const [data] = useContext(ContextApi);
    return (

        <div className='big_container'>

            <div className='smallOne '>
            <h3 className=' heading text-center  font-bold text-2xl underline small-caps'>{category}</h3>
                {/* CATEGORY */}
                {
                    data.filter(
                        x => x.category === category
                    ).map(
                        (content, index) => <div className='inside_box' key={index}>
                            <img src={content.imageUrl} alt="" className='rounded-2xl' />
                            <span><h1>{content.title}</h1>
                                <p>{content.description}</p>
                                <h2> {content.category}/<span className='badge rounded-pill bg-danger'>{content.date}</span>  </h2></span>
                        </div>
                    )
                }

            </div>

            <div className='smallTwo'>
            <h3 className=' heading text-center  font-bold text-2xl '>Top Posts</h3>
                {/* TOPPOST ADVERTISEMENT */}
                <div>
                    {
                        data.filter(
                            x => x.category === category

                        ).map(
                            (content, index) => <div key={index}>
                                <img src={content.imageUrl} alt="" />
                                <span><h1>{content.title}</h1>
                                    <h2 > {content.category} / <span className='badge rounded-pill bg-danger'> {content.date}</span>  </h2></span>
                            </div>

                        )
                    }
                </div>
                <Advertisement />
            </div>
        </div>

        // <div>
        //     {
        //         data.filter(> display.category === category 

        //         ).map(
        //             content => <Link to={`/${content}`}  key={content.id} >
        //                 <Category content={content}  />

        //             display =
        //             </Link>
        //         )
        //     }
        //     {

        //     }


        // </div>

    )
}

export default Type