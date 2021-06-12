import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMyPosts } from "../../../actions/postAction";
import Item from "./Item";
import style from "./userpost.module.css";

function UserPost() {
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getMyPosts(localStorage.getItem("user")));
    }, []);

    return (
        <div className={style.userPost}>
            <div className={style.container}>
                
                <div className={style.header}>
                    <h3>Manage</h3>
                    <div className={style.selector}>
                        <button>All</button>
                        <button>Published</button>
                        <button>Pending</button>
                    </div>
                </div>

                <div className={style.description}>
                    <table>
                        <thead>
                            <tr className={style.title}>
                                <th>Thumbnail</th>
                                <th>Address</th>
                                <th>Type</th>
                                <th>Price</th>
                                <th>Rooms</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {posts.map((post, index) => (
                                <Item post={post} key={index} />
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default UserPost;
