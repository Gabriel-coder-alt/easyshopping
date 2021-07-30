import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import PropTypes from 'prop-types';

class Alert extends Component {
    static propTypes = {
        message: PropTypes.object.isRequired,
    }
    componentDidUpdate(prevProps){
        if (prevProps.cart.cart !== this.props.cart.cart) {
            this.props.alert.success('Item added to cart')
        }
    }
    render() {
        return (
            <Fragment />
        )
    }
}

const mapStateToProps = (state) => ({
    message: state.message,
    cart: state.cart
})

export default connect(mapStateToProps, null)(withAlert()(Alert));