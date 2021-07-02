import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import ProductCard from '../ProductCard';

export default function RelatedProducts(props) {
    const [ data, setData ] = useState([]);

    useEffect(() => {
        const ac = new AbortController();
        getRelatedItems();

        return () => ac.abort();
    }, [props.category, props.title]);

    const getRelatedItems = async () => {
        try {
            const res = await axios.get(`https://fakestoreapi.com/products/category/${props.category}`);
            setData(res.data.filter( item => item.title !== props.title ));
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <Fragment>
            <div className="mt-5">
                <span style={{ fontSize: '24px'}}>Related items</span>
            </div>
            <div className="row mb-3">
                {data.map( item => (<ProductCard key={item.id} item={item} />))}
            </div>
        </Fragment>
    )
}
