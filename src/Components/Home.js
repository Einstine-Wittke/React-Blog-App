import React, { useEffect, useState ,useContext} from 'react'
import Articles from './Articles'
import Banner from './Banner'
import Latest from './Latest'
import Stories from './Stories'
import { useParams } from 'react-router-dom'



const Home = () => {
 
  return(
    <>
    <div className=''>
      <Banner/>
      <Latest/>
      <Articles/>
      <Stories/>
      </div>
    </>
  )
}

export default Home