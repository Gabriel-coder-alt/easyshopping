import { GET_PRODUCT, GET_PRODUCTS } from '../actions/catalogue/types';

const initialState = {
    products: [],
    product: {}
}

export default function catalog(state=initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_PRODUCT:
            return {
                ...state,
                product: payload
            };
        case GET_PRODUCTS:
            return {
                ...state,
                products: payload
            };
        default:
            return state;
    }
}