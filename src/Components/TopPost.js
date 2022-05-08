import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import Advertisement from './Advertisement'
import AdvertisementOne from './AdvertisementOne'

const TopPost = () => {
  const [data] = useContext(ContextApi)
  return (
    <>
      <p className='ml-80 underline'>Top Posts</p>
      <div className='-ml-24 mt-8 grid grid-rows-5 gap-5 w-1/6 h-1/6 '>


        {
          data.filter(
            d => d.id === "4" && (d.category === "technology" || d.category === "food" || d.category === "fitness" || d.category === "hollywood" || d.category === "tourism")
          ).map(
            (e, index) => <img key={index} src={e.imageUrl} alt={e.title} className='rounded-2xl' />

          )

        }
        {
          data.filter(
            d => d.id === "4" && (d.category === "technology" || d.category === "food" || d.category === "fitness" || d.category === "hollywood" || d.category === "tourism")
          ).map(
            (e, index) =>  <div className='toppost_content' key={index}>
              <h1 >{e.title} </h1>
              <p><span>{e.category}</span> / <span className='badge rounded-pill bg-danger text-white'>{e.date}</span> </p>
            </div>
          )

        }
      </div>
    </>
  )
}

export default TopPost