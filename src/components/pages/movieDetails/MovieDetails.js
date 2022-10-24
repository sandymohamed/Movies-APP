import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MyCard from '../../card/card';

const MovieDetails = () => {

    const param = useParams()



    const [movie, setMovie] = useState({})

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}${param.id}?api_key=${process.env.REACT_APP_API_KEY}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err))
    }, [])

    return (
        <div className='p-5 '>
            <span className='d-flex'>
                <p className='fs-4'>Movie Type :  </p>
                {(movie.genres) ?  (movie.genres).map((i,ind) => (
                        <p className='fs-4' key={ind}> {i.name}, </p>
                    )) :
                    null
                }


            </span>
            <MyCard item={movie} />

        </div>
    );
};

export default MovieDetails;