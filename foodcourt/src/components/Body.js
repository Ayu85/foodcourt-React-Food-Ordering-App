import React from 'react'
import Header from './Header'
import Herosection from './Herosection'
import Secondarysection from './Secondarysection'
import FoodContainer from './FoodContainer'
import Testimonial from './Testimonial'
import Advertisment from './Advertisment'
import Footer from './Footer'
import Copyright from './Copyright'
const Body = () => {

    return (
        <>
            <Header />
            <Herosection/>
            <Secondarysection/>
            <FoodContainer/>
            <Testimonial/>
            <Advertisment/>
            <Footer/>
            <Copyright/>
        </>

    )
}

export default Body
