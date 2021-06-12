import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../Card/Card";
import style from "./card.container.module.css";
import SearchBar from "../SearchBar/SearchBar";
import * as api from "../../../api/index.js";
import { getAPost, getPosts } from "../../../actions/postAction";
import { useDispatch, useSelector } from "react-redux";

function CardContainer() {
    const posts = useSelector((state) => state.posts);

    const [postArr, setPostArr] = useState([]);
    const [pageNumber, setPageNumber] = useState(0);
    const [totalPage, setTotalPage] = useState([]);

    const perPage = 6

    // useEffect(() => {
    //     setPostArr(posts.slice(pageNumber*12, pageNumber*12 + 12))
    // }, []);

    useEffect(() => {
        setPostArr(posts.slice(pageNumber * perPage, pageNumber * perPage + perPage));
    }, [pageNumber, posts]);

    useEffect(() => {
        setPageNumber(0);
        let term = [];
        for (let i = 0; i < posts.length / perPage; i++) term.push(i);
        setTotalPage(term);
    }, [posts]);

    return (
        <div style={{ backgroundColor: "#f7f8f9" }}>
            <div className={style.cardContainer}>
                {postArr.length !== 0 &&
                    postArr.map((post, key) => <Card post={post} key={key} />)}
            </div>
            <div className={style.pagination}>
                {totalPage.map((page, key) => (
                    <span
                        className={style.page}
                        key={key}
                        onClick={() => setPageNumber(page)}
                        style={page === pageNumber ? {color: "white", backgroundColor: "#f0384a"} : {}}s
                        >
                        {page}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
