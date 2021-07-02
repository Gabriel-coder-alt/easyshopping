import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class ProductCard extends Component {
    render() {
        const { description, image, title, id, price } = this.props.item;
        return (
            <div className="col col-lg-3 col-md-4 col-6 mt-3">
                <Link to={`/products/${id}`} style={{ textDecoration: 'none', color: 'black' }}>
                    <div className="card">
                        <div className="card-body">
                            <img src={image} style={{ height: '200px', width: '150px' }} className="card-img-top" alt="alternate" />
                            <div className="card-title"><span style={{ fontWeight: 'bold'}}>{title.slice(0, 20)}</span></div>
                            <p className="card-text">{description.slice(0, 20)}...</p>
                            <p><b>${price}</b></p>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}

ProductCard.propTypes = {
    item: PropTypes.object.isRequired,
}

export default ProductCard;