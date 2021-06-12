import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import style from "./post.amenity.module.css";

import * as api from "../../../../api/index.js";
import { useDispatch } from "react-redux";
import {
    createPost,
    deletePost,
    updatePost,
} from "../../../../actions/postAction";

function PostAmenity({ post, decreaseStep, setPost, uploadPost, id }) {
    const [bathroomData, setBathroomData] = useState({});

    const history = useHistory();

    const dispatch = useDispatch();

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleChangeBathroom = async (e) => {
        setBathroomData({
            ...bathroomData,
            [e.target.name]: e.target.value,
        });

        setPost({
            ...post,
            bathroom: bathroomData,
        });
    };

    const preventSubmit = async (e) => {
        e.preventDefault();

        if (!id) {
            console.log(post);
            dispatch(createPost(post));
        } else {
            dispatch(updatePost(id, post));
        }
        history.push("/my_posts");
    };

    return (
        <div id={style.container}>
            <div id={style.amenity}>
                <h2>Amenity</h2>
            </div>

            <div className={style.amenity_form}>
                <form>
                    <div className={style.category} id={style.bathroom}>
                        <div className={style.category_name}>Bathroom</div>
                        <div
                            className={style.to_complete}
                            id={style.bathroom_type}>
                            <label for="to_complete_type">Type</label>
                            <select
                                id={style.to_complete_type}
                                value={
                                    bathroomData.category === undefined
                                        ? ""
                                        : bathroomData.category
                                }
                                onChange={handleChangeBathroom}
                                name="category">
                                <option value="Khép kín">Khép kín</option>
                                <option value="Chung">Chung</option>
                            </select>
                        </div>

                        <div
                            className={style.to_complete}
                            id={style.bathroom_water}>
                            <label for="to_complete_water">Water</label>
                            <select
                                id={style.to_complete_water}
                                value={
                                    bathroomData.hot === undefined
                                        ? ""
                                        : bathroomData.hot
                                }
                                onChange={handleChangeBathroom}
                                name="hot">
                                <option value="Nóng">Có nóng lạnh</option>
                                <option value="Lạnh">Không có nóng lạnh</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.category} id={style.kitchen}>
                        <div className={style.category_name}>Kitchen</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_kitchen">Kitchen</label>
                            <select
                                id={style.to_complete_kitchen}
                                value={
                                    post.kitchen === undefined
                                        ? ""
                                        : post.kitchen
                                }
                                onChange={handleChange}
                                name="kitchen">
                                <option value="Riêng">Khu bếp riêng</option>
                                <option value="Chung">Khu bếp chung</option>
                                <option value="Không nấu ăn">
                                    Không nấu ăn
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className={style.category} id={style.air_conditioner}>
                        <div className={style.category_name}>
                            Air conditioner
                        </div>
                        <div className={style.to_complete}>
                            <label for="to_complete_airconditioner">
                                Air conditioner
                            </label>
                            <select
                                id={style.to_complete_kitchen}
                                value={
                                    post.airConditioner === undefined
                                        ? ""
                                        : post.airConditioner
                                }
                                onChange={handleChange}
                                name="airConditioner">
                                <option value="Có">Có</option>
                                <option value="Không">Không</option>
                            </select>
                        </div>
                    </div>

                    <div className={style.category} id={style.balcony}>
                        <div className={style.category_name}>Balcony</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_balcony">Balcony</label>
                            <select
                                id={style.to_complete_balcony}
                                value={
                                    post.balcony === undefined
                                        ? ""
                                        : post.balcony
                                }
                                onChange={handleChange}
                                name="balcony">
                                <option value="Có">Có</option>
                                <option value="Không">Không</option>
                            </select>
                        </div>
                    </div>

                    <div
                        className={style.category}
                        id={style.electricity_water_bill}>
                        <div className={style.category_name}>
                            Electricity and Water bill
                        </div>
                        <div
                            className={style.to_complete}
                            id={style.electricity_bill}>
                            <label for="to_complete_electricity_bill">
                                Electricity
                            </label>
                            <select
                                id={style.to_complete_electricity_bill}
                                value={
                                    post.electric === undefined
                                        ? ""
                                        : post.electric
                                }
                                onChange={handleChange}
                                name="electric">
                                <option value="Giá dân">Giá dân</option>
                                <option value="Giá thuê">Giá thuê</option>
                            </select>
                        </div>
                        <div
                            className={style.to_complete}
                            id={style.water_bill}>
                            <label for="to_complete_water_bill">
                                Water (đồng/m<sup>3</sup>)
                            </label>
                            <input
                                value={
                                    post.water === undefined ? "" : post.water
                                }
                                onChange={handleChange}
                                name="water"
                                type="text"
                                id={style.to_complete_water_bill}
                                placeholder="5,000"
                            />
                        </div>
                    </div>
                    <div className={style.category} id={style.other}>
                        <div className={style.category_name}>Other</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_other">Other</label>
                            <input
                                value={
                                    post.otherAmenity === undefined
                                        ? ""
                                        : post.otherAmenity
                                }
                                onChange={handleChange}
                                name="otherAmenity"
                                type="text"
                                id={style.to_complete_other}
                                placeholder="Tủ lạnh/ máy giặt/ giường tủ"
                            />
                        </div>
                    </div>
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
                                onClick={preventSubmit}>
                                Submit
                            </button>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostAmenity;
