import React, { useState } from "react";
import style from "./post.image.module.css";
import FileBase from "react-file-base64";

function PostImage({ increaseStep, decreaseStep, setPost, post, id }) {
    const saveImage = (file) => {
        let term = post.image;

        term.unshift(...file.map((item) => item.base64));

        term.pop();
        setPost({
            ...post,
            image: term,
        });
    };

    const handleDelete = (key) => {
        let term = post.image.filter((img, index) => index !== key);
        if (term.length === 0) {
            term = [
                "https://www.level10martialarts.com/wp-content/uploads/2017/04/default-image.jpg",
            ];
        }
        setPost({
            ...post,
            image: term,
        });
    };
    return (
        <div className={style.container}>
            <div id={style.image_title}>
                <h2>Image</h2>
            </div>

            <div className={style.uploadedImg}>
                {console.log(post.image)}
                {post.image.map((img, key) => (
                    <div className={style.prImg}>
                        {/* <button className={style.clsBtn}> */}
                        <i
                            className="fad fa-backspace"
                            onClick={() => {
                                handleDelete(key);
                            }}></i>
                        {/* </button> */}
                        {/* <div className={style.imgCtn}> */}
                        {/* </div> */}
                        <img src={img} alt="" />
                    </div>
                ))}
            </div>

            <div className={style.image_upload_area}>
                <p>Upload image</p>
                <form>
                    {/* <i className={style.fa fa-file-image-o}></i> */}
                    <label className={style.custom_file_upload}>
                        {/* <input type="file" />
                            Upload */}
                        <FileBase
                            type="file"
                            multiple={true}
                            onDone={saveImage}
                        />
                        Upload
                    </label>
                </form>
                <div style={{ display: "flex" }}>
                    <div className={style.category} id={style.continue}>
                        <button
                            id={style.continue_button}
                            onClick={decreaseStep}>
                            Back
                        </button>
                    </div>
                    <div className={style.category} id={style.continue}>
                        <button
                            id={style.continue_button}
                            onClick={increaseStep}>
                            Continue
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostImage;
