import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approvePost, getPostsByQuery } from "../../../actions/postAction";
import style from "./admin.post.module.css";

function AdminPost() {

    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(getPostsByQuery({ status: "pending" }));
    }, []);

    const approve = async (id) => {
        dispatch(approvePost(id))
    }

    // console.log(posts);

    return (
        <div className={style.userPost}>
            { console.log(posts) }
            <div className={style.container}>
                <div className={style.header}>
                    <h3>Post approval</h3>
                </div>
                <div className={style.description}>
                    <table>
                        <tr className={style.title}>
                            <th>Thumbnail</th>
                            <th>Address</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Rooms</th>
                            <th>Status</th>
                            <th>Actions</th>
                            <th>Approval</th>
                        </tr>

                        {posts.map((post, key) => (<tr className={style.itemDetail} key={key}>
                            <td className={style.imgCtn}><img src={post.image[0]} alt=""/></td>
                            <td className={style.address}>
                                {`${post.no}, ${post.street}, ${post.ward}, ${post.district}, ${post.city}`}
                            </td>
                            <td>{post.type}</td>
                            <td><b>{post.price}triệu/tháng</b></td>
                            <td>{post.room}</td>
                            <td className={style.status}>{post.status}</td>
                            <td>
                                {/* <button><i className="far fa-pencil-alt"></i></button> */}
                                <button><i className="far fa-trash"></i></button>
                                <button><i className="far fa-eye"></i></button>
                            </td>
                            <td className={style.acceptbox}>
                                <input type="checkbox" onChange={() => approve(post._id)} />
                            </td>
                        </tr>))}


                    </table>
                </div>
            </div>
        </div>
    );
}

export default AdminPost;