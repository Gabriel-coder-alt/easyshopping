import { GET_PRODUCTS, GET_PRODUCT, GET_ERRORS } from './types';
import axios from 'axios';

export const getProducts = () => async dispatch => {
    try {
        const res = await axios.get('https://fakestoreapi.com/products');
        dispatch({
            type: GET_PRODUCTS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        });
    }
}

export const getProduct = id => async dispatch => {
    try {
        const res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        dispatch({
            type: GET_PRODUCT,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err
        })
        console.log(err.message);
    }
}
