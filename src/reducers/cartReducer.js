import { ADD_TO_CART, REMOVE_FROM_CART, GET_CART, UPDATE_CART } from '../actions/cart/types';

const initialState = {
    cart: [],
    total: 0
};

export default function shoppingCart(state=initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case GET_CART:
            return {
                ...state,
            }

        case ADD_TO_CART:
            return {
                ...state,
                cart: [payload, ...state.cart]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== payload)
            }

        case UPDATE_CART:
            return {
                ...state,
                cart: state.cart.map( item => (item.id===action.payload.id) ? (item=action.payload) : item )
            }
            
        default:
            return state;
    }
}