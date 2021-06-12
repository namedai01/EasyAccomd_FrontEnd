import React, { useEffect } from "react";
import style from './comment.module.css'

function Comment({ comment }) {
    
    return (
        <div className={style.commentContainer}>
            {
                console.log(comment)
            }
            <div>
                <div className={style.avatar}>
                    <img src={comment.commentedBy.image} alt="" />
                </div>
            </div>
            <div className={style.commentContent}>
                <div className={style.userName}>{comment.commentedBy.username}</div>

                <div className={style.date}>
                    <i class="fal fa-calendar-alt"></i>
                    {comment.date}
                </div>

                <div className={style.description}>
                    {comment.text}
                </div>
            </div>
        </div>
    );
}

export default Comment;
