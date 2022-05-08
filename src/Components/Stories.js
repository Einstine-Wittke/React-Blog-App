import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import image from '../Components/image/paris.jpg'
import AdvertisementOne from './AdvertisementOne'
const Stories = () => {
    const [data]=useContext(ContextApi)
  return (
    <>
    <AdvertisementOne/>
     <div className='stories_container text-left  font-bold text-2xl underline'>
    <span className=''> Latest </span>
     <span>Stories</span>
    </div>
      <div className='stories_container2 mt-3  grid grid-cols-3 gap-2 rounded-2xl '>
            
            {
              data.filter(
                d => d.id==="3" && (d.category==="tourism" || d.category==="fitness"  || d.category==="technology")
              ).map(
                (e, index) => <img key={index} src={e.imageUrl} alt={e.title} className='rounded-2xl' />

              )

            }
            {
              data.filter(
                d => d.id==="3" && (d.category==="tourism" || d.category==="fitness"  || d.category==="technology")
              ).map(
                (e, index) => <div className="stories_content" key={index}>
                  <h1>{e.title} </h1>
                  <p>{e.description}</p>
                  <h2> <span>{e.category}</span> / <span className='badge rounded-pill bg-danger'>{e.date}</span>  </h2>
                </div>

              )

            }
    </div>
    </>
  )
}

export default Stories