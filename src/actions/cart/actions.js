import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART, UPDATE_CART } from './types';

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    }
}

export const removeFromCart = id => {
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export const getCart = () => {
    return {
        type: GET_CART
    }
}

export const updateCart = product => {
    return {
        type: UPDATE_CART,
        payload: product
    }
}