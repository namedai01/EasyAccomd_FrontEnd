import React, { useEffect } from 'react'
import style from "./userfavorite.module.css"
import CardContainer from "../../List/CardContainer/CardContainer"
import { useDispatch, useSelector } from 'react-redux';
import { getFavorPosts } from '../../../actions/postAction';
function UserFavorite() {

    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(getFavorPosts(localStorage.getItem("user")));
    }, []);

    return (
        <div className={style.userFavorite}>
            <div className={style.title}>
                <h2>My Favorite</h2>
            </div>
            <div className={style.container}>
                <CardContainer />
            </div>
        </div>
    )
}

export default UserFavorite
