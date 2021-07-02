import React, { Component } from 'react';
import ProductCard from './ProductCard';
import { connect } from 'react-redux';
import { getProducts } from '../actions/catalogue/actions';
import PropTypes from 'prop-types';

class Catalogue extends Component {
    componentDidMount () {
        this.props.getProducts();
    }
    render() {
        const { products } = this.props;
        return (
            <div className="container mt-2 mb-3">
                <div className="row">
                    {products.map( product => (<ProductCard key={product.id} item={product} />) )}
                </div>
            </div>
        )
    }
}

Catalogue.propTypes = {
    getProducts: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    products: state.catalog.products
})

export default connect(mapStateToProps, { getProducts })(Catalogue);