import React from 'react';
import MoviesList from '../../moviesList/MoviesList';

const Home = () => {

    return (
        <div style={{minHeight: '100vh'}}>
            <h1 className='title text-center h-100'>Most Popular This Month</h1>
            <MoviesList />
        </div>
    );
};

export default Home;