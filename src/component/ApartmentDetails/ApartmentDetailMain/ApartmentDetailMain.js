import React, { useState, useEffect } from "react";
import axios from "axios";
import style from "./apartmentdetail.main.module.css";
import Comment from "../Comment/Comment";
import Slider from "react-slick";
import LightBox from "../LightBox/LightBox";
import ReadMoreReact from "read-more-react";
import { useDispatch, useSelector } from "react-redux";
import {
    commentPost,
    getAPost,
    likePost,
    unlikePost,
} from "../../../actions/postAction";

function ApartmentDetailMain({ id }) {
    const dispatch = useDispatch();

    let posts = useSelector((state) => state.posts);

    const [love, setLove] = useState(
        posts[0].favorite.includes(localStorage.getItem("user"))
    );

    useEffect(() => {
        setLove(posts[0].favorite.includes(localStorage.getItem("user")));
    });

    const [text, setText] = useState("");

    const handleText = (e) => {
        setText(e.target.value);
    };

    useEffect(() => {
        dispatch(getAPost(id));
    }, [love]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        accessibility: true,
        // centerMode: true,
        // centerPadding: '100px',
    };

    const handleHeartClick = async (e) => {
        e.preventDefault();

        if (!love) {
            dispatch(likePost(id));
        } else {
            dispatch(unlikePost(id));
        }
        setLove(!love);
    };

    const handleComment = async (e) => {
        e.preventDefault();
        setText("");

        dispatch(commentPost(posts[0]._id, { text: e.target[0].value }));
    };
    return (
        <main className={style.detailMain}>
            <div className={style.carousel}>
                <Slider {...settings}>
                    {posts[0].image.map((im, key) => (
                        <div className={style.displayItem}>
                            <div key={key}>
                                <img src={im} alt="" />
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className={style.container}>
                <div className={style.content}>
                    <div>
                        <div className={style.contentTitle}>
                            <div>
                                <div className={style.breadcrumb}>
                                    <a href="/">Home</a>
                                    {" > "}
                                    <a href="#">{posts[0].type}</a>
                                    {" > "}
                                    <a href="#">{posts[0].title}</a>
                                </div>

                                <div className={style.title}>
                                    {posts[0].title}
                                </div>
                                <i className="fas fa-map-marker-alt"></i>
                                <span>
                                    {posts[0].no +
                                        ", " +
                                        posts[0].street +
                                        ", " +
                                        posts[0].ward +
                                        ", " +
                                        posts[0].district +
                                        ", " +
                                        posts[0].city}
                                </span>
                            </div>
                            {/* <div className={style.avatar}>
                                 <img src={host.image} alt="" /> 
                            </div> */}
                        </div>
                        <div className={style.presDes}>
                            <div className={style.noBorderLeft}>
                                <i className="fa fa-usd-circle"></i>
                                <span>Price</span>
                                <b>{posts[0].price}</b>
                            </div>

                            <div className={style.noBorderLeft}>
                                <i className="fas fa-home-alt"></i>
                                <span>Type</span>
                                <b>{posts[0].type}</b>
                            </div>

                            <div className={style.noBorderLeft}>
                                <i className="fas fa-square"></i>
                                <span>Size</span>
                                <b>{posts[0].size}</b>
                            </div>

                            <div className={style.noBorderLeft}>
                                <i className="fas fa-warehouse-alt"></i>
                                <span>Room</span>
                                <b>{posts[0].numOfRoom}</b>
                            </div>
                        </div>

                        <div className={style.description}>
                            <header>
                                <h2>About this listing</h2>
                            </header>
                            <div className={style.paragraph}>
                                {posts[0].description !== undefined && (
                                    <ReadMoreReact
                                        text={posts[0].description}
                                        min={0}
                                        ideal={500}
                                        max={1000}
                                        readMoreText="read more"
                                    />
                                )}
                            </div>
                        </div>

                        <div className={style.detail}>
                            <div className={style.detailTitle}>Details</div>
                            <ul className={style.detailList}>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                    Owner Type:
                                    <b>{posts[0].ownerType}</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                    Kitchen:
                                    <b>{posts[0].kitchen}</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                    Air Condition:
                                    <b>{posts[0].airConditioner}</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                    Balcony:
                                    <b>{posts[0].balcony}</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                    Water:
                                    <b>{posts[0].water}</b>
                                </li>
                                <li>
                                    <i
                                        className="fa fa-angle-right"
                                        aria-hidden="true"
                                    ></i>
                                    Electricity:
                                    <b>{posts[0].electric}</b>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <LightBox images={posts[0].image} />

                    <div className={style.commentContainer}>
                        <h2>Review</h2>
                        {posts[0].comments.map((comment, key) => (
                            <Comment key={key} comment={comment} />
                        ))}

                        {localStorage.getItem("role") === "renter" && (
                            <form onSubmit={handleComment}>
                                <input
                                    type="text"
                                    onChange={handleText}
                                    value={text}
                                    placeholder="Add a comment..."
                                    className={style.commentArea}
                                />
                            </form>
                        )}
                    </div>
                </div>

                <div className={style.forms}>
                    <div className={style.above}>
                        <div className={style.formsTitle}>
                            <h2>Contact</h2>
                        </div>

                        <div className={style.formBody}>
                            <div className={style.pricesAreas}>
                                <div>
                                    <i className="fa fa-dollar-sign"></i>
                                    <sup></sup>
                                    {posts[0].price}
                                    <sub>/month</sub>
                                </div>

                                <div>
                                    <i className="fa fa-chart-area"></i>
                                    {posts[0].size}m<sup>2</sup>
                                </div>
                            </div>

                            <div className={style.name}>
                                <i className="fa fa-user"></i>
                                Host: {posts[0].postedBy.username}
                            </div>

                            <div className={style.phone}>
                                <i className="fa fa-phone"></i>
                                Phone: {posts[0].postedBy.phoneNumber}
                            </div>

                            <div>
                                <i className="fa fa-info-circle"></i>
                                You can contact to host
                            </div>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        {localStorage.getItem("role") === "renter" && (
                            <div
                                className={love ? style.added : style.removed}
                                onClick={handleHeartClick}>
                                <i className="fa fa-heart"></i>
                                Add to Favorite
                            </div>
                        )}
                    </div>
                    <div className={style.listIcons}>
                        <div className={style.icons}>
                            <i className="fab fa-twitter"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fab fa-facebook-f"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fa fa-envelope"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fab fa-youtube"></i>
                        </div>

                        <div className={style.icons}>
                            <i className="fab fa-instagram-square"></i>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default ApartmentDetailMain;
