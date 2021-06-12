import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import style from './user.tabmenu.module.css'
import { getUser } from '../../../api/host'

function UserTabMenu() {
    const [user, setUser] = useState({})

    useEffect(() => {
        // setUser(getUser())
        setUser({
            // name: localStorage.getItem("username")
        })
    }, [])

    return (
        <div className={style.tabMenu}>
            <div className={style.userBrief}>
                <div className={style.userAvatar}>
                    <i className="fas fa-user"></i>
                </div>
                {/* <span>{user.name}</span> */}
                {/* <span>User Info</span> */}
            </div>

            <div className={style.dashboard}>
                {localStorage.getItem('role') !== null && localStorage.getItem('role') !== 'admin' && (<NavLink to="/profile" activeClassName={style.selected} >
                    <i className="fas fa-user"></i>
                    <span>My Profile</span>
                </NavLink>)}

                {localStorage.getItem('role') === 'host' && (<NavLink exact={true} to="/upload" activeClassName={style.selected} >
                    <i className="fas fa-file-plus"></i>
                    <span>Upload</span>
                </NavLink>)}

                {localStorage.getItem('role') === 'host' && (<NavLink exact={true} to="/my_posts" activeClassName={style.selected} >
                    <i className="fas fa-folder"></i>
                    <span>My Post</span>
                </NavLink>)}

                {localStorage.getItem('role') === 'renter' && (<NavLink exact={true} to="/favorite" activeClassName={style.selected} >
                    <i className="fas fa-heart"></i>
                    <span>My Favorite</span>
                </NavLink>)}

                {localStorage.getItem('role') === 'admin' && (<NavLink exact={true} to="/approve/host" activeClassName={style.selected} >
                    <i className="fas fa-user"></i>
                    <span>Approve host</span>
                </NavLink>)}

                {localStorage.getItem('role') === 'admin' && (<NavLink exact={true} to="/approve/post" activeClassName={style.selected} >
                    <i className="fas fa-user"></i>
                    <span>Approve post</span>
                </NavLink>)}

            </div>
        </div>
    )
}

export default UserTabMenu
