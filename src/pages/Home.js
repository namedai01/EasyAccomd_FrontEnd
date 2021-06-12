import React from 'react'
import HomeMain from '../component/Home/HomeMain'
import Footer from '../component/Layout/Footer/Footer'
import Nav from '../component/Layout/Nav/Nav'

function Home() {
    return (
        <div>
            <Nav layout="Home" />
            <HomeMain />
            <Footer />
        </div>
    )
}

export default Home
