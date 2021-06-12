import React, { useEffect, useState } from "react";
import axios from "axios";
import style from "./post.des.module.css";

// ---Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const SigninSchema = yup.object().shape({
    title: yup
        .string()
        .required()
        .min(1, "title must have at least 1 characters"),
    no: yup.string().required().min(3, "title must have at least 1 characters"),
    street: yup
        .string()
        .required()
        .min(1, "street must have at least 1 char"),
    ward: yup
        .string()
        .required()
        .min(1, "title must have at least 1 char"),
});
// ----------

function PostDes({ increaseStep, setPost, post, id }) {
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(SigninSchema),
    });

    const [city, setCity] = useState([]);

    const [district, setDistrict] = useState([]);

    const [cityId, setCityId] = useState(-1);

    useEffect(() => {
        getCityData();
    }, []);

    useEffect(() => {
        getDistrictData();
    }, [cityId]);

    const getCityData = async () => {
        try {
            const response = await axios.get(
                "https://vapi.vnappmob.com/api/province"
            );
            setCity(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const getDistrictData = async () => {
        try {
            const response = await axios.get(
                "https://vapi.vnappmob.com/api/province/district/" + cityId
            );
            setDistrict(response.data.results);
        } catch (error) {
            console.log(error);
        }
    };

    const onSubmit = (data) => {
        console.log(data);
    };

    const handleChange = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value,
        });
    };

    const handleCityChange = async (e) => {
        if (e.target.value === "") setCityId(-1);
        else {
            setCityId(
                city.find((c) => c.province_name === e.target.value).province_id
            );
            handleChange(e);
        }
    };

    return (
        <div className={style.container}>
            <div id={style.description}>
                <h2>Description</h2>
            </div>

            <div className={style.description_form}>
                <form onClick={handleSubmit(onSubmit)}>
                    <div className={style.category} id={style.title}>
                        <div className={style.category_name}>Title</div>

                        <div className={style.to_complete}>
                            <label for="title_title">Title</label>
                            <input
                                ref={register}
                                value={
                                    post.title === undefined ? "" : post.title
                                }
                                onChange={handleChange}
                                name="title"
                                type="text"
                                id={style.title_title}
                                placeholder="Home Sweet Home"
                            />
                            {errors.title && <p>{errors.title.message}</p>}
                        </div>
                    </div>

                    <div className={style.category} id={style.des}>
                        <div className={style.category_name}>Description</div>

                        <div className={style.to_complete}>
                            <label for="to_complete_des">Description</label>
                            <textarea
                                value={
                                    post.description === undefined
                                        ? ""
                                        : post.description
                                }
                                onChange={handleChange}
                                name="description"
                                id={style.to_complete_des}
                                placeholder="Enter description"
                            ></textarea>
                        </div>
                    </div>

                    <div className={style.category} id={style.location}>
                        <div className={style.category_name}>Location</div>
                        <div className={style.wrap_item}>
                            <div
                                className={style.to_complete}
                                id={style.location_no}
                            >
                                <label for="to_complete_no">No</label>
                                <input
                                    value={post.no === undefined ? "" : post.no}
                                    onChange={handleChange}
                                    name="no"
                                    type="text"
                                    id={style.to_complete_no}
                                    placeholder="144"
                                />
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_street}
                            >
                                <label for="to_complete_street">Street</label>
                                <input
                                    ref={register}
                                    value={
                                        post.street === undefined
                                            ? ""
                                            : post.street
                                    }
                                    onChange={handleChange}
                                    name="street"
                                    type="text"
                                    id={style.to_complete_street}
                                    placeholder="Xuân Thủy"
                                />
                                {errors.street && (
                                    <p>{errors.street.message}</p>
                                )}
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_ward}
                            >
                                <label for="to_complete_ward">Ward</label>
                                <input
                                    value={
                                        post.ward === undefined ? "" : post.ward
                                    }
                                    onChange={handleChange}
                                    name="ward"
                                    type="text"
                                    id={style.to_complete_ward}
                                    placeholder="Dịch Vọng Hậu"
                                />
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_district}
                            >
                                <label for="to_complete_district">
                                    District
                                </label>
                                <select
                                    name="district"
                                    className={style.type_in}
                                    id={style.district}
                                    value={
                                        post.district === undefined
                                            ? ""
                                            : post.district
                                    }
                                    onChange={handleChange}
                                >
                                    <option value="">Quận/Huyện</option>
                                    {district.map((d, key) => (
                                        <option
                                            key={key}
                                            value={d.district_name}
                                        >
                                            {d.district_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div
                                className={style.to_complete}
                                id={style.location_city}
                            >
                                <label for="to_complete_city">City</label>
                                <select
                                    name="city"
                                    value={
                                        post.city === undefined ? "" : post.city
                                    }
                                    className={style.type_in}
                                    id={style.city}
                                    onChange={handleCityChange}
                                >
                                    <option value="">Tỉnh/Thành phố</option>
                                    {city.map((c, key) => (
                                        <option
                                            key={key}
                                            value={c.province_name}
                                        >
                                            {c.province_name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className={style.category} id={style.nearby}>
                        <div className={style.category_name}>Nearby</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_nearby">Nearby</label>
                            <textarea
                                value={
                                    post.nearby === undefined ? "" : post.nearby
                                }
                                onChange={handleChange}
                                name="nearby"
                                id={style.to_complete_nearby}
                                placeholder="Trường học, bệnh viện,..."
                            ></textarea>
                        </div>
                    </div>

                    <div className={style.category} id={style.type}>
                        <div className={style.category_name}>Type</div>
                        <div
                            className={style.to_complete}
                            id={style.type_detail}
                        >
                            <label for="to_complete_detail">Type</label>
                            <select
                                value={post.type}
                                onChange={handleChange}
                                name="type"
                                id={style.to_complete_detail}
                            >
                                <option value="Phòng trọ">Phòng trọ</option>

                                <option value="Chung cư mini">
                                    Chung cư mini
                                </option>

                                <option value="Nhà nguyên căn">
                                    Nhà nguyên căn
                                </option>

                                <option value="Chung cư nguyên căn">
                                    Chung cư nguyên căn
                                </option>
                            </select>
                        </div>

                        <div className={style.to_complete} id={style.type_room}>
                            <label for="to_complete_room">Number of room</label>
                            <input
                                value={
                                    post.numOfRoom === undefined
                                        ? ""
                                        : post.numOfRoom
                                }
                                onChange={handleChange}
                                name="numOfRoom"
                                type="text"
                                id={style.to_complete_room}
                                placeholder="2"
                            />
                        </div>
                    </div>

                    <div className={style.category} id={style.price}>
                        <div className={style.category_name}>Price</div>

                        <div className={style.to_complete} id={style.price}>
                            <label for="to_complete_price">Price (đồng)</label>
                            <input
                                value={
                                    post.price === undefined ? "" : post.price
                                }
                                onChange={handleChange}
                                name="price"
                                type="text"
                                id={style.to_complete_price}
                                placeholder="1,000,000"
                            />
                        </div>
                    </div>

                    <div className={style.category} id={style.area}>
                        <div className={style.category_name}>Area</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_area">
                                Area (m<sup>2</sup>)
                            </label>
                            <input
                                value={post.size === undefined ? "" : post.size}
                                onChange={handleChange}
                                name="size"
                                type="text"
                                id={style.to_complete_area}
                                placeholder="50"
                            />
                        </div>
                    </div>

                    <div className={style.category} id={style.other}>
                        <div className={style.category_name}>Other</div>
                        <div className={style.to_complete}>
                            <label for="to_complete_other">Other</label>
                            <select
                                value={post.ownerType}
                                onChange={handleChange}
                                name="ownerType"
                                id={style.to_complete_other}
                            >
                                <option value="Chung">Chung</option>
                                <option value="Không chung">
                                    Không chung chủ
                                </option>
                            </select>
                        </div>
                    </div>
                    <div className={style.category} id={style.continue}>
                        <button
                            id={style.continue_button}
                            onClick={increaseStep}
                        >
                            Continue
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PostDes;
