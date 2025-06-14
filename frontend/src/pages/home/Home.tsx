import React from 'react'
import Feature from './components/feature/Feature'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner2/Banner2'
import Categories from './components/categories/Categories'
import { useDevice } from '../../context/DeviceContext'
import MobileSearch from './components/mobile-search/MobileSearch'
import DeliveryLocationAlert from './components/delivery-location-alert/DeliveryLocationAlert'
import MobileCategories from './components/mobile-categories/MobileCategories'



const Home:React.FC = () => {
  const{isMobile}=useDevice()
  return (
    <div>
         {isMobile && <MobileSearch/>}
         {isMobile && <DeliveryLocationAlert/>}
         {isMobile && <MobileCategories/>}
         {!isMobile && <Banner/>}
         {!isMobile && <Feature/>}
         {!isMobile && <Categories/>}
        {!isMobile && <Banner2/>}
        <hr className='h-5 bg-gray-200 border-0' />
        <h4 className='p-3 text-2xl border-b-1 border-gray-400'>Products for you</h4>
        <p className='flex items-center justify-center mt-10'>ab idhar filter aur products a jayenge....</p>
    </div>
  )
}

export default Home
