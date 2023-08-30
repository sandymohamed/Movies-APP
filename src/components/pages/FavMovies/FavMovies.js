import React, { useState, useEffect } from 'react';
import MyCard from '../../card/card';
import { useSelector } from 'react-redux';
import Loader from '../../loader/loader';

const FavMovies = () => {
    const [isLoading, setIsLoading] = useState(true);
    const movies = useSelector(state => state.moviesIds);

    useEffect(() => {
        // Simulate loading delay for demonstration purposes
        const loadingTimeout = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(loadingTimeout);
    }, []);

    return (
        <div className='cards-container ' style={{ minHeight: '100vh' }}>
            {isLoading ? (
                <Loader />
            ) : movies.length > 0 ? (
                movies.map((item, i) => (
                    <MyCard item={item} key={i} heart='gold' moreStyle='col-8 col-md-3' />
                ))
            ) : (
                <h1 className='title'>No favorite movies yet..</h1>
            )}
        </div>
    );
};

export default FavMovies;
