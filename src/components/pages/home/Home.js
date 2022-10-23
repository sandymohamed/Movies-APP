import React from 'react';
import MoviesList from '../../moviesList/MoviesList';

const Home = () => {

    return (
        <div>
            <h1 className='text-center'>Most Popular This Month</h1>
            <MoviesList />
        </div>
    );
};

export default Home;