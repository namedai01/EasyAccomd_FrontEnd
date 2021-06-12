import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    UNLIKE
} from "../constants/actionTypes.js";

const like = false;

export default (state = like, action) => {
    switch (action.type) {
        case LIKEALREADY:
            return action.payload;
        case LIKEYET:
            return action.payload;
        default:
            return state;
    }
};
