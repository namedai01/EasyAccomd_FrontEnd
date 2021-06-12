import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { deletePost } from "../../../actions/postAction";
import style from "./userpost.module.css";

function Item({ post }) {

    const dispatch = useDispatch();

    const history = useHistory();

    const handleDelete = (e) => {
        e.preventDefault();
        dispatch(deletePost(post._id));
    }

    const handleUpdate = (e) => {
        e.preventDefault();

        history.push("/upload/" + post._id);

    }
    return (
        <tr className={style.itemDetail}>
            <td id="Thumbnail">
                <img src={post.image[0]} alt="Failure" />
            </td>
            <td id="address">
                {post.no +
                    ", " +
                    post.street +
                    ", " +
                    post.ward +
                    ", " +
                    post.district +
                    ", " +
                    post.city}
            </td>
            <td id="type">{post.type}</td>

            <td id=" price">
                <b>{post.price} triệu/tháng</b>
            </td>

            <td id="Rooms"> {post.numOfRoom}</td>

            <td id="status" className={style.status}>
                {post.pending ? "Published" : "Pending"}
            </td>

            <td id="actions">
                <button onClick={handleUpdate}>
                    <i className="far fa-pencil-alt"></i>
                </button>
                <button onClick={handleDelete}>
                    <i className="far fa-trash"></i>
                </button>
                <button>
                    <i className="far fa-eye"></i>
                </button>
            </td>
        </tr>
    );
}

export default Item;
