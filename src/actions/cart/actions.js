import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART, UPDATE_CART, CREATE_MESSAGE } from './types';

export const addToCart = item => {
    return {
        type: ADD_TO_CART,
        payload: item
    };
}

export const createMessage = () => {
    return {
        type: CREATE_MESSAGE,
        payload: {
            message: 'Item added to cart sucessfully',
            status: '200'
        }
    };
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