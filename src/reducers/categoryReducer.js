import { GET_CATEGORY, GET_CATEGORIES } from "../actions/category/types";

const initialState = {
    category: [],
    categories: []
}

export default function cat (state=initialState, action) {
    switch (action.type) {
        case GET_CATEGORY:
            return {
                ...state,
                category: action.payload
            };
        case GET_CATEGORIES:
            return {
                ...state,
                categories: action.payload
            }
        default:
            return state;
    }
}