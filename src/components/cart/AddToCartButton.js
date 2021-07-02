import React from 'react';
import { connect } from 'react-redux';
import { addToCart, updateCart } from '../../actions/cart/actions';

function AddToCartButton(props) {

    // On click event handler for adding item to cart
    const onClick = () => {

        // Array containing the cart item
        const product = props.cart.filter( item => item.id === props.cartItem.id );
        
        // Check if the cart item exists in the cart array
        if (product.length === 0) {
            const { cartItem } = props;

            //create a new object to store the cart items data alongside their quantity
            const newItem = {};
            newItem.name = cartItem.name;
            newItem.id = cartItem.id;
            newItem.description = cartItem.description;
            newItem.category = cartItem.category;
            newItem.title = cartItem.title;
            newItem.price = cartItem.price;
            newItem.quantity = 1;

            //update the cart with the newly created object
            props.addToCart(newItem);
            console.log('New item added to cart');
        }
    }
    
    return (
        <button className="btn btn-danger btn-block" onClick={onClick} >
            <span>Add to cart</span>
        </button>
    )
}

const mapStateToProps = (state) => ({
    cart: state.cart.cart
})

export default connect(mapStateToProps, { addToCart, updateCart })(AddToCartButton);