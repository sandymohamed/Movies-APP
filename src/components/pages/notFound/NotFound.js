import React from 'react';
import { Link } from 'react-router-dom';
//  ---------------------------------------------------

const NotFoundPage = () => {
    return (
        <div className=' w-75 d-flex justify-content-center align-items-center flex-column m-5 p-5' style={{ minHeight: '100vh' }}>

            <span className='h1 fw-bold'>Error 404</span>
            <p className="title h3">Page not found! Looks like the URL went on a vacation without leaving a forwarding address. Let's hope it's enjoying some sunny beaches and will be back soon!</p>
            <Link to='/' className="title fs-3 text-decoration-underline"> Click here be redirected to the homepage.</Link>

        </div>
    );
};

export default NotFoundPage;