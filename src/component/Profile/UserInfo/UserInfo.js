import React, { useEffect, useState } from "react";
import style from "./userinfo.module.css";
import axios from "axios";

import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";


import * as api from "../../../api/index";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
  

function UserInfo() {
    const [userInfo, setUserInfo] = useState({
        phoneNumber: "",
        image:
            "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
        fullName: "",
        no: "",
        street: "",
        ward: "",
        district: "",
        city: "",
        email: "",
        facebook: "",
        instagram: "",
        twitter: "",
        favorite: []
    });

    const dispatch = useDispatch();

    const history = useHistory();

    const [city, setCity] = useState([]);

    const [district, setDistrict] = useState([]);

    const [cityId, setCityId] = useState(-1);

    useEffect(async () => {
        const data = await api.getUserInfo(localStorage.getItem("user"));

        // console.log(data)
        setUserInfo({ ...userInfo, ...data});
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

    const saveImage = (file) => {
        setUserInfo({
            ...userInfo,
            image: file.base64,
        });
    };

    const handleDelete = (e) => {
        setUserInfo({
            ...userInfo,
            image:
                "https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png",
        });
    };

    const handleChange = (e) => {
        setUserInfo({
            ...userInfo,
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

    const handleSubmit = () => {
        setOpen(true);
        api.updateInfoUser(localStorage.getItem("user"), userInfo);
    };

    // ---- Toast
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={style.userInfo}>
            {console.log(userInfo)}
            <div className={style.category} id={style.photo}>
                <div className={style.title} id={style.title_photo}>
                    <h3>Photo</h3>
                </div>
                <div className={style.content} id={style.content_photo}>
                    <div className={style.image_container}>
                        <img src={userInfo.image} alt="profile photo" />
                    </div>

                    <div className={style.image_instruction}>
                        <p>Choose an image from your computer</p>
                        <label className={style.custom_file_upload}>
                            <FileBase
                                type="file"
                                multiple={false}
                                onDone={saveImage}
                            />
                            Upload
                        </label>
                        <button
                            className={style.delete_button}
                            onClick={handleDelete}>
                            Delete
                        </button>
                    </div>
                </div>
            </div>

            <div className={style.category} id={style.info}>
                <div className={style.title} id={style.title_info}>
                    <h3>Infomation</h3>
                </div>
                <div className={style.content} id={style.content_info}>
                    <div className={style.content_box}>
                        <label for="first_name">Full Name</label>
                        <input
                            value={
                                userInfo.fullName === undefined
                                    ? ""
                                    : userInfo.fullName
                            }
                            onChange={handleChange}
                            name="fullName"
                            type="text"
                            placeholder="John"
                            className={style.type_in}
                            id={style.first_name}
                        />
                    </div>

                    {/* <div className={style.content_box}>
                        <label for="last_name">Last Name</label>
                        <input
                            type="text"
                            placeholder="Doe"
                            className={style.type_in}
                            id={style.last_name}
                        />
                    </div> */}

                    <div className={style.content_box}>
                        <label for="username">Username</label>
                        <input
                            value={
                                userInfo.username === undefined
                                    ? ""
                                    : userInfo.username
                            }
                            onChange={handleChange}
                            name="username"
                            type="text"
                            placeholder="johndoe123"
                            className={style.type_in}
                            id={style.username}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="bio">Bio</label>
                        <textarea
                            style={{ resize: "vertical", width: "212%" }}
                            value={
                                userInfo.bio === undefined ? "" : userInfo.bio
                            }
                            onChange={handleChange}
                            name="bio"
                            id={style.bio}
                            className={style.type_in}></textarea>
                    </div>
                </div>
            </div>

            <div className={style.category} id={style.address}>
                <div className={style.title} id={style.title_address}>
                    <h3>Address</h3>
                </div>
                <div className={style.content} id={style.content_address}>
                    <div className={style.content_box}>
                        <label for="no">No</label>
                        <input
                            value={userInfo.no === undefined ? "" : userInfo.no}
                            onChange={handleChange}
                            name="no"
                            type="text"
                            placeholder="144"
                            className={style.type_in}
                            id={style.no}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="street">Street</label>
                        <input
                            value={
                                userInfo.street === undefined
                                    ? ""
                                    : userInfo.street
                            }
                            onChange={handleChange}
                            name="street"
                            type="text"
                            placeholder="Xuân Thủy"
                            className={style.type_in}
                            id={style.street}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="ward">Ward</label>
                        <input
                            value={
                                userInfo.ward === undefined ? "" : userInfo.ward
                            }
                            onChange={handleChange}
                            name="ward"
                            type="text"
                            placeholder="Dịch Vọng Hậu"
                            className={style.type_in}
                            id={style.ward}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="district">District</label>
                        <select
                            name="district"
                            className={style.type_in}
                            id={style.district}
                            value={
                                userInfo.district === undefined
                                    ? ""
                                    : userInfo.district
                            }
                            onChange={handleChange}>
                            <option value="">Quận/Huyện</option>
                            {district.map((d, key) => (
                                <option key={key} value={d.district_name}>
                                    {d.district_name}
                                </option>
                            ))}
                        </select>
                        {/* <input
                            value={
                                userInfo.district === undefined
                                    ? ""
                                    : userInfo.district
                            }
                            onChange={handleChange}
                            name="district"
                            type="text"
                            placeholder="Cầu Giấy"
                            className={style.type_in}
                            id={style.district}
                        /> */}
                    </div>

                    <div className={style.content_box}>
                        <label for="city">City</label>

                        <select
                            name="city"
                            value={
                                userInfo.city === undefined ? "" : userInfo.city
                            }
                            className={style.type_in}
                            id={style.city}
                            onChange={handleCityChange}>
                            <option value="">Tỉnh/Thành phố</option>
                            {city.map((c, key) => (
                                <option key={key} value={c.province_name}>
                                    {c.province_name}
                                </option>
                            ))}
                        </select>
                        {/* <input
                            value={
                                userInfo.city === undefined
                                    ? ""
                                    : userInfo.city
                            }
                            onChange={handleChangeLocation}
                            name="city"
                            type="text"
                            placeholder="Hà Nội"
                            className={style.type_in}
                            id={style.city}
                        /> */}
                    </div>
                </div>
            </div>

            <div className={style.category} id={style.contact}>
                <div className={style.title} id={style.title_contact}>
                    <h3>Contact</h3>
                </div>
                <div className={style.content} id={style.content_contact}>
                    <div className={style.content_box}>
                        <label for="phone">Phone</label>
                        <input
                            value={
                                userInfo.phoneNumber === undefined
                                    ? ""
                                    : userInfo.phoneNumber
                            }
                            onChange={handleChange}
                            name="phone"
                            type="text"
                            placeholder="0123456789"
                            className={style.type_in}
                            id={style.phone}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="email">Email</label>
                        <input
                            value={
                                userInfo.email === undefined
                                    ? ""
                                    : userInfo.email
                            }
                            onChange={handleChange}
                            name="email"
                            type="text"
                            placeholder="johndoe@abc.xyz"
                            className={style.type_in}
                            id={style.email}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="facebook">Facebook</label>
                        <input
                            value={
                                userInfo.facebook === undefined
                                    ? ""
                                    : userInfo.facebook
                            }
                            onChange={handleChange}
                            name="facebook"
                            type="text"
                            placeholder="facebook.com/johndoe"
                            className={style.type_in}
                            id={style.facebook}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="instagram">Instagram</label>
                        <input
                            value={
                                userInfo.instagram === undefined
                                    ? ""
                                    : userInfo.instagram
                            }
                            onChange={handleChange}
                            name="instagram"
                            type="text"
                            placeholder="instagram.com/johndoe"
                            className={style.type_in}
                            id={style.instagram}
                        />
                    </div>

                    <div className={style.content_box}>
                        <label for="twitter">Twitter</label>
                        <input
                            value={
                                userInfo.twitter === undefined
                                    ? ""
                                    : userInfo.twitter
                            }
                            onChange={handleChange}
                            name="twitter"
                            type="text"
                            placeholder="twitter.com/johndoe"
                            className={style.type_in}
                            id={style.twitter}
                        />
                    </div>

                    <div className={style.save_button}>
                        <button onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>

            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Save successfully !
                </Alert>
            </Snackbar>
        </div>
    );
}

export default UserInfo;
