import React from 'react'
import Nav from '../component/Layout/Nav/Nav'
import NotFound from '../component/NotFound/NotFound'

function Error() {
    return (
        <div>
            <Nav />
            <div style={{
                paddingTop: "8vh"
            }}>
                <NotFound />
            </div>
        </div>
    )
}

export default Error
