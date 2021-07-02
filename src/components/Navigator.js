import React from 'react';
import { Link } from 'react-router-dom';

export default function navigator() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">EasyShopping</a>
            <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#mynav">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="mynav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/mycart">Cart</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}
