import React from 'react'
import banner1 from '../../../../assets/banner1.webp'

const Banner:React.FC = () => {
  return (
    <div id='banner-1' className=''>
       <img src={banner1} alt="...." className='w-full aspect-[3/1]' />
    </div>
  )
}

export default Banner
