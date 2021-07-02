import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart, getCart } from '../../actions/cart/actions';
import CartItem from './CartItem';

const Cart = (props) => {

    const [ total, setTotal ] = useState(0);
    useEffect(() => {
        getCart();
        getTotal();
    }, [props.list, total])

    const getTotal = () => {
        const data = []
        props.list.forEach( item => {
            data.push(item.price);
        });
        setTotal(data.reduce((a, b) => a + b, 0)); 
        console.log(total);
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col col-lg-7 col-md-6 col-sm-12 col-xs-12 mx-auto">
                    <div className="card my-5">
                        <div className="card-header text-center bg-secondary">
                            <span className="text-white">CART</span>
                        </div>
                        <div className="card-body">
                           <table className="table">
                               <thead>
                                   <tr>
                                       <th scope="col">Name of item</th>
                                       <th scope="col">Qty</th>
                                       <th scope="col">Price</th>
                                   </tr>
                               </thead>
                               <tbody>
                                {props.list.map( (item, index) => (<CartItem key={item.id} item={item} />))}
                               </tbody>
                           </table>
                           <button className="btn btn-block btn-danger">Checkout</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    list: state.cart.cart
})

export default connect(mapStateToProps, { addToCart, removeFromCart, getCart })(Cart);