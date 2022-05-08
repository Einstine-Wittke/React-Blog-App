import React, { useContext } from 'react'
import { ContextApi } from '../ContextApi/ContextApi'
import image from '../Components/image/paris.jpg'

const Banner = () => {
    const [data] = useContext(ContextApi)

    return (
        <div className=' mt-3  grid grid-cols-3  gap-2 '>

            {
                data.filter(
                    banner => banner.id === `1` && (banner.category === `tourism`)
                ).map(
                    (content, index) => <img key={index} src={content.imageUrl} alt={content.title} className='col-span-2 row-span-2 rounded-2xl h-fit' />
                )
            }
            {
                data.filter(
                    banner => banner.id === `5` && (banner.category === `fitness` || banner.category === `technology`)
                ).map(
                    (content, index) => <img key={index} src={content.imageUrl} alt={content.title} className='rounded-2xl h-52' />
                )
            }
            {
                data.filter(
                    banner => banner.id === `1` && (banner.category === `tourism`)
                ).map(
                    (content, index) => <div key={index}>
                    <h2 className='relative bottom-64 left-10 text-xl font-bold'>{content.title}</h2>
                        <h1 className='relative bottom-64  text-lg right-4 font-semibold '> Tourism / {content.date}</h1>
                        </div>
                )
            }
        </div>
    )
}

export default Banner