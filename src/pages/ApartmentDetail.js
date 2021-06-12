import React from 'react'
import ApartmentDetailMain from '../component/ApartmentDetails/ApartmentDetailMain/ApartmentDetailMain'
import Footer from '../component/Layout/Footer/Footer'
import Nav from '../component/Layout/Nav/Nav'

function ApartmentDetail({ match }) {
    return (
        <div>
            <Nav />
            <div style={{
                paddingTop: "8vh"
            }}>
                <ApartmentDetailMain id={match.params.id}
                />
                <Footer />
            </div>
        </div>

    )
}

export default ApartmentDetail
