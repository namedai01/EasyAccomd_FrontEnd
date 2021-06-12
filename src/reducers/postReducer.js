import {
    FETCH_ALL,
    CREATE,
    UPDATE,
    DELETE,
    LIKE,
    UNLIKE,
    CLICK,
    FAVOR_POST,
    MYPOSTS,
    COMMENT,
    APPROVE_POST
} from "../constants/actionTypes.js"

const posts = [
    {
        image: [],
        favorite: [],
        pending: false,
        title: "",
        location: {
            no: "",
            street: "",
            ward: "",
            district: "",
            city: "",
        },
        nearby: "",
        type: "",
        numOfRoom: 0,
        price: 0,
        size: 0,
        ownerType: "",
        kitchen: "",
        water: 0,
        otherAmenity: "",
        postedBy: {
            username: "",
            phoneNumber: "",
        },
        airConditioner: "",
        comments: [],
        electric: "",
        balcony: ""
    },
]

export default (state = posts, action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload
        case LIKE:
            return state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            )
        case UNLIKE:
            return state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            )
        case CREATE:
            return [...state, action.payload]

        case UPDATE:

            return state.map((post) =>
                post._id === action.payload._id ? action.payload : post
            )
        case DELETE:
            return state.filter((post) => post._id !== action.payload)

        case CLICK:
            return [action.payload]

        case FAVOR_POST:
            return [...action.payload]

        case MYPOSTS:
            return [...action.payload]

        case COMMENT:
            return [action.payload]

        case APPROVE_POST:
            return state.filter((post) => post._id !== action.payload)

        default:
            return state
    }
}
