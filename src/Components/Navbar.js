import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import { ContextApi } from '../ContextApi/ContextApi';
const Navbar = () => {
    const [data] = useContext(ContextApi);
    return (
        <>
        <div className='justify-center  flex small-caps'>
            <h1 className='-rotate-90  font-bold mt-3' > The</h1><span className=' text-5xl font-bold'>Thing</span>
          </div>
        <div className='small flex space-x-20 justify-center mt-3 font-medium '>
            
            <Link to="/home" className='  hover:underline text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300'>Home</Link>
            {
                data.filter(
                    category => (category.id)%5 === 0
                )
                .map(
                    ({category}, index) => <Link to={`/${category}`}  key={index}  className='hover:underline text-black active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 '>{category}</Link>
                )
            }
        </div>
        </>

)
}

export default Navbar
