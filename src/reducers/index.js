import { combineReducers } from 'redux';
import catalog from './catalogReducer';
import shoppingCart from './cartReducer';
import errors from './errorReducer';
import cat from './categoryReducer';
import message from './messageReducer';

export default combineReducers({
    catalog: catalog,
    cart: shoppingCart,
    error: errors,
    category: cat,
    message: message
})