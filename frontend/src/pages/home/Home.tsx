import React from 'react'
import Feature from './components/feature/Feature'
import Banner from './components/banner/Banner'
import Banner2 from './components/banner2/Banner2'
import Categories from '../../components/categories/Categories'


const Home:React.FC = () => {
  return (
    <div>
         <Banner/>
         <Feature/>
         <Categories/>
         <Banner2/>
    </div>
  )
}

export default Home
