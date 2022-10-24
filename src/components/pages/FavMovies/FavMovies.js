import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import  * as favMoviesId  from '../../FavMoviesList' ; 
import MyCard from '../../card/card';
import { useSelector } from 'react-redux';


const FavMovies = () => {

    const movies = useSelector(state => state.moviesIds)

    return (

        <div>
            <div className='cards-container'>

            {(movies.length > 0) ?
                    movies.map((item, i) => (
                        <MyCard item={item} key={i} heart='gold'/>
                    )) : <h1>No favorite movies yet..</h1>
                }
            </div >

        </div>
    );
};

export default FavMovies;