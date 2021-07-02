import { GET_CATEGORY, GET_CATEGORIES } from "./types";
import { GET_ERRORS } from "../errors/types";
import axios from 'axios';

export const getProductsInCategory = category => async dispatch => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/category/${category}`)
        dispatch({
            type: GET_CATEGORY,
            payload: res.data
        });
        console.log(res.data);
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
        console.log(err.message)
    }
}