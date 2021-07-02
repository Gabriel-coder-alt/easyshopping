import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddToCartButton from './cart/AddToCartButton';
import { connect } from 'react-redux';
import { getProduct } from '../actions/catalogue/actions';
import RelatedProducts from './category/RelatedProducts';

class Description extends Component {
    componentDidMount () {
        const { id } = this.props.match.params;
        this.props.getProduct(id);
    }

    componentDidUpdate (prevProps) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            const { id } = this.props.match.params;
            this.props.getProduct(id);
            console.log("State updated");
        }
    }

    render() {
        const { title, price, description, image, category, id } = this.props.product;
        return (
            <div className="container">
                <div className="row mt-2">
                    <div className="col col-lg-12 col-md-10 col-sm-12 col-xs-12 mx-auto">
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12 text-center">
                                        <img src={image} style={{ width: '350px', height: '350px' }} alt="alt-frame" />
                                    </div>

                                    <div className="col col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                        <p>
                                            <span className="card-title" style={{ fontSize: '26px' }}>{title}</span> <br />
                                            <small className="text-muted">{category}</small>
                                        </p>
                                        <p style={{ fontSize: '18px' }}>{description}</p>
                                        <p style={{ fontWeight: 'bold', fontSize: '30px'}}>${price}</p>
                                        <AddToCartButton cartItem={this.props.product} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RelatedProducts category={category} title={title} />
            </div>
        )
    }
}

Description.defaultProps = {
    product: {
        title: 'Product title goes in here',
        description: 'Product Description goes in here',
        category: 'Product category',
        price: 'Product price in $'
    }
}

Description.propTypes = {
    product: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    product: state.catalog.product
})

export default connect(mapStateToProps, { getProduct })(Description);