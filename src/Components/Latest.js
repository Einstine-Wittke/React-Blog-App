import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import image from '../Components/image/paris.jpg'
const Latest = () => {
    const [data]=useContext(ContextApi)
  return (
    <>
    <div className='text-left mt-5 font-bold text-2xl underline'>
    <span className=''>The </span>
     <span>Latest</span>
    </div>
      <div className=' mt-3  grid grid-cols-3 gap-2 '>
            {
              data.filter(
                d => d.id==="2" && (d.category==="food" || d.category==="hollywood"  || d.category==="fitness")
              ).map(
                (e, index) => <img key={index} src={e.imageUrl} alt={e.title} className='rounded-2xl' />
                              
              )

            }
            {
              data.filter(
                d => d.id==="2" && (d.category==="food" || d.category==="hollywood"  || d.category==="fitness")
              ).map(
                (e, index) => <div className='latest_content' key={index}>
                  <h1>{e.title}</h1>
                  <h2>{e.description}</h2>
                  <p>{e.category} / <span className='badge rounded-pill bg-danger'>{e.date}</span></p>
                </div>
                              
              )

            }
    </div>
    </>
  )
}

export default Latest