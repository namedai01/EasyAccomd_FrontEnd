import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../../actions/postAction";
import CardContainer from "../CardContainer/CardContainer";
import SearchBar from "../SearchBar/SearchBar";
import style from "./list.main.module.css";
import queryString from 'query-string';
import { useParams } from "react-router-dom";


function ListMain({ params }) {
    const test = useParams()
   
    const dispatch = useDispatch();

    const posts = useSelector((state) => state.posts);

    useEffect(() => {
        console.log(window.location.href)
        // console.log(test)

        // console.log(Object.keys(params).length === 0)
        if (window.location.href === "http://localhost:3000/posts") {
            dispatch(getPosts());
        }
        console.log(posts);
        
    }, []);

    return (
        <div>
            <SearchBar />
            <CardContainer posts = { posts }/>
        </div>
    );
}

export default ListMain;
