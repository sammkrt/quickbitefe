import React from 'react'
import BottomMenu from '../../components/BottomMenu/BottomMenu'
import Filter from '../../components/Home/Filter/Filter'
import RestaurantGallery from '../../components/Home/RestaurantGallery/RestaurantGallery'
// import '../../../public/assets/logoHeader.png'

const Home = () => {
  return (
    <div>
        <img className="header-img" src="./assets/logoHeader.png" />
        <Filter/>
       <RestaurantGallery/>
        <BottomMenu/>
    </div>
  )
}

export default Home