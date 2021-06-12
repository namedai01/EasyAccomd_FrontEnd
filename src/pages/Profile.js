import React, { useEffect } from 'react'
import Nav from '../component/Layout/Nav/Nav'
import NotFound from '../component/NotFound/NotFound'
import AdminHost from '../component/Profile/AdminHost/AdminHost'
import AdminPost from '../component/Profile/AdminPost/AdminPost'
import PostAmenity from '../component/Profile/Upload/PostAmenity/PostAmenity'
import PostDes from '../component/Profile/Upload/PostDes/PostDes'
import PostImage from '../component/Profile/Upload/PostImage/PostImage'
import Upload from '../component/Profile/Upload/Upload'
import UserFavorite from '../component/Profile/UserFavorite/UserFavorite'
import UserInfo from '../component/Profile/UserInfo/UserInfo'
import UserPost from '../component/Profile/UserPost/UserPost'
import UserTabMenu from '../component/Profile/UserTabMenu/UserTabMenu'

function Profile({ match }) {
    const style = {
        display: "flex",
        backgroundColor: "#f7f8f9",
        paddingTop: "8vh",
        backgroundColor: "#4d5567"
    }

    return (
        <div>
            <Nav />
            <div style={style}>
                <UserTabMenu />
                {localStorage.getItem('role') !== 'admin' && match.path === '/profile' && <UserInfo />}
                {localStorage.getItem('role') === 'host' && match.path === '/upload/:id' && <Upload id={match.params.id} />}
                {localStorage.getItem('role') === 'host' && match.path === '/upload' && <Upload />}
                {localStorage.getItem('role') === 'host' && match.path === '/my_posts' && <UserPost />}
                {localStorage.getItem('role') === 'renter' && match.path === '/favorite' && <UserFavorite />}
                {localStorage.getItem('role') === 'admin' && match.path === '/approve/host' && <AdminHost />}
                {localStorage.getItem('role') === 'admin' && match.path === '/approve/post' && <AdminPost />}
            </div>
        </div>
    )
}

export default Profile
