import React from "react";
import SearchBar from "../List/SearchBar/SearchBar";
import style from "./home.main.module.css";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

function HomeMain() {
    const history = useHistory()
    return (
        <div>
            <div className={style.banner}>
                <div className={style.quote}>
                    <h1 style={{ fontSize: "2.5rem" }}>
                        Accomodation & Experience 
                    </h1>
                </div>
                <SearchBar />
            </div>
            <main className={style.homeMain}>
                {/* <div className={style.list}></div> */}

                {/* <div className={style.topPlace}></div> */}

                <div className={style.feature}>
                    <div className={style.centerTitle}>
                        <h3>Complete Solution for Owners</h3>
                        <p>Learn more about our features and services</p>
                    </div>
                    {/* <div className={style.featureListContainer}> */}
                    <div className={style.featureList}>
                        <div className={style.featureItem}>
                            <i class="fal fa-user-friends"></i>
                            <h4>Register for free</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                        <div className={style.featureItem}>
                            <i class="fal fa-home"></i>
                            <h4>Add your listing</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                        <div className={style.featureItem}>
                            <i class="fal fa-camera-retro"></i>
                            <h4>Upload beautiful images</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                        <div className={style.featureItem}>
                            <i class="fal fa-clipboard-check"></i>
                            <h4>Publish your listing</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                        <div className={style.featureItem}>
                            <i class="fal fa-clipboard-list-check"></i>
                            <h4>Get reservations</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                        <div className={style.featureItem}>
                            <i class="fal fa-analytics"></i>
                            <h4>Build a successful business</h4>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore.
                            </p>
                        </div>
                    </div>
                </div>

                <div className={style.join} onClick={() => history.push("/host/login")}>
                    <h2>
                        Earn up to $1,000 /month hosting your home in with us
                    </h2>
                    <button >Become our host</button>
                </div>
                <div className={style.comment}>
                    <div className={style.centerTitle}>
                        <h3>Hear From Our Hosts</h3>
                        <p>
                            The biggest reward is to satisfy our clients and
                            share their experience with us
                        </p>
                    </div>
                    <div className={style.commentList}>
                        <div className={style.commentItem}>
                            <div className={style.commentHeader}>
                                <div className={style.commentAvatar}></div>
                                <h4>Jay Simon</h4>
                            </div>
                            <div className={style.commentContent}>
                                <p>
                                    Fast reservations, high quality services.
                                    The bathroom is a little bigger then i
                                    thought which suprises me. Amazing, good job
                                </p>
                                <div className={style.star}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className={style.commentItem}>
                            <div className={style.commentHeader}>
                                <div className={style.commentAvatar}></div>
                                <h4>Bruno</h4>
                            </div>
                            <div className={style.commentContent}>
                                <p>
                                    Easy Accomd has increased our booking
                                    requests 10 times more than our older
                                    website. Thank you for the amazing work!
                                </p>
                                <div className={style.star}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className={style.commentItem}>
                            <div className={style.commentHeader}>
                                <div className={style.commentAvatar}></div>
                                <h4>Marcus Rashford</h4>
                            </div>
                            <div className={style.commentContent}>
                                <p>
                                    Wonderful sight-seeing. The price is pretty
                                    high yet it is still worthwhile. Highly
                                    recommend for those who are looking for a
                                    place of long-term living
                                </p>
                                <div className={style.star}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className={style.commentItem}>
                            <div className={style.commentHeader}>
                                <div className={style.commentAvatar}></div>
                                <h4>David de Gea</h4>
                            </div>
                            <div className={style.commentContent}>
                                <p>
                                    Easy Accomd has increased our booking
                                    requests 10 times more than our older
                                    website. Thank you for the amazing work!
                                </p>
                                <div className={style.star}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className={style.commentItem}>
                            <div className={style.commentHeader}>
                                <div className={style.commentAvatar}></div>
                                <h4>Edison Cavani</h4>
                            </div>
                            <div className={style.commentContent}>
                                <p>
                                    Fast reservations, high quality services.
                                    The bathroom is a little bigger then i
                                    thought which suprises me. Amazing, good
                                    job!
                                </p>
                                <div className={style.star}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>

                        <div className={style.commentItem}>
                            <div className={style.commentHeader}>
                                <div className={style.commentAvatar}></div>
                                <h4>Martial</h4>
                            </div>
                            <div className={style.commentContent}>
                                <p>
                                    Wonderful sight-seeing. The price is pretty
                                    high yet it is still worthwhile. Highly
                                    recommend for those who are looking for a
                                    place of long-term living
                                </p>
                                <div className={style.star}>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default HomeMain;
