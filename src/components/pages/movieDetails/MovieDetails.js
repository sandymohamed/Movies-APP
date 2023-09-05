import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../card/card';
import './details.css';


const MovieDetails = () => {
    const param = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}${param.id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err));
    }, [param?.id]);

    return (
        <div
            className='details'
           
        >

            <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} alt={movie?.original_title} className='image' style={{}} />

            <div className='d-flex flex-column justify-content-center align-items-center content m-0 '>

                <span className='d-flex  m-1 '>{movie.original_title && movie.original_title}</span>
                <span className='d-flex  m-2'>
                    {(movie.genres || []).map((i, index) => (
                        <p key={i.name}> {index !== 0 ? '/' : ''} {i.name}  </p> 
                    ))}
                </span>
                <div className='w-100 d-flex flex-column justify-content-center align-items-center content' >
                    <MyCard item={movie} moreStyle='col-8 col-md-8 ' h='70vh' />
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
