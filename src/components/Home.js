import React, { Component } from 'react';
import Header from './Header';
import Catalogue from './Catalogue';

export default class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Catalogue />
            </div>
        )
    }
}
