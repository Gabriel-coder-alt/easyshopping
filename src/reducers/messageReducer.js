import { CREATE_MESSAGE } from '../actions/cart/types';

const initialState = {
    msg:'',
    status:''
}

export default function message (state=initialState, action) {
    switch (action.type) {
        case CREATE_MESSAGE:
            return {
                ...state,
                msg: action.payload.message,
                status: action.payload.status
            }
        default:
            return state;
    }
}