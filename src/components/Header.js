import React from 'react';
import header from '../header.jpg';

export default function Header() {
    return (
        <div className="jumbotron jumbotron-fluid" style={{ 
            color: 'black',
            backgroundImage: 'url(https://cdn.pixabay.com/photo/2015/07/17/22/43/student-849825_960_720.jpg)',
            height: '80vh',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <div className="container" style={{ marginTop: '300px', marginLeft: '0px', opacity: '0.8' }}>
                <div className="col col-lg-7 col-md-8 col-sm-12">
                    <div className="card">
                        <div className="card-body">
                        <h1 className="display-4">Shopping made easy</h1>
                        <p className="lead">Feed your eyes with our amazing collection of products</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// <a href='https://www.freepik.com/free-photos-vectors/banner'>Banner vector created by freepik - www.freepik.com</a>
// <a href='https://www.freepik.com/free-photos-vectors/banner'>Banner vector created by freepik - www.freepik.com</a>