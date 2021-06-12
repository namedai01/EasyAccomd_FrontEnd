import React from 'react'
import Footer from '../component/Layout/Footer/Footer'
import Nav from '../component/Layout/Nav/Nav'
import CardContainer from '../component/List/CardContainer/CardContainer'
import ListMain from '../component/List/ListMain/ListMain'
import SearchBar from '../component/List/SearchBar/SearchBar'

function List({ match }) {
    return (
        <div>
            <Nav />

            <div style={{
                paddingTop: "8vh",
                backgroundColor: "#f7f8f9"
            }} >
                <ListMain params={match} />
            </div>
            <Footer />
        </div>

    )
}

export default List

