import React, { useState } from "react";
import { Link } from "react-router-dom";

import style from "./join.module.css";

function Join() {
    const [name, setName] = useState("");

    const [room, setRoom] = useState("");

    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    const handleChangeRoom = (e) => {
        setRoom(e.target.value);
    };
    return (
        <div className={style.joinOuterContainer}>
            <div className={style.joinInnerContainer}>
                <h1 className={style.heading}>Join</h1>
                <div>
                    <input
                        type="text"
                        placeholder="Name"
                        className={style.joinInput}
                        onChange={handleChangeName}
                        value={name}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Room"
                        className={style.joinInput}
                        style={{ marginTop: "20px" }}
                        onChange={handleChangeRoom}
                        value={room}
                    />
                </div>

                <Link
                    to={`/chat?name=${name}&room=${room}`}
                    onClick={(e) =>
                        !name || !room ? e.preventDefault() : null
                    }>
                    <button
                        className={style.button}
                        style={{ marginTop: "20px" }}
                        type="submit">
                        Sign In
                    </button>
                </Link>
            </div>
        </div>
    );
}

export default Join;
