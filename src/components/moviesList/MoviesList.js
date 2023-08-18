import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MyCard from '../card/card';
import './moviesList.css'
import Loader from '../loader/loader';

const MoviesList = () => {

    const [data, setDate] = useState(null)
    const [isLoading, setisLoading] = useState(true)


    useEffect(() => {
        // get all movies
        axios.get(`${process.env.REACT_APP_API_URL}popular?api_key=${process.env.REACT_APP_API_KEY}&page=4`)
            .then(res => {
                setDate(res.data.results)
                setisLoading(false)
            })
            .catch(err => console.log(err))
    }, [])





    const handleSearch = (e) => {
        setisLoading(true)
        if (e.target.value.length > 0) {
            axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${e.target.value}`)
                .then(res => {
                    setDate(res.data.results)
                    setisLoading(false)
                })
                .catch(err => console.log(err))
        } else {
            axios.get(`${process.env.REACT_APP_API_URL}popular?api_key=${process.env.REACT_APP_API_KEY}&page=4`)
                .then(res => {
                    setDate(res.data.results)
                    setisLoading(false)
                })
                .catch(err => console.log(err))

        }


    }

    return (
        <div>
            <form className="pe-5" role="search">
                <input
                    className="form-control warning m-4 d-block "
                    name='search'
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    onChange={(e) => { handleSearch(e) }}
                    onFocus={(e) => {
                        e.target.classList.add('warning-focus');
                    }}
                    onBlur={(e) => {
                        e.target.classList.remove('warning-focus');
                    }}
                />

                <br />
                {(data?.length === 0) && <h1 className='text-danger text-center ms-5'>Movie not found ☹</h1>}

            </form>

            <div className='cards-container'>

                {
                   isLoading ?
                    <Loader />
                   :
                    data?.map((item, i) => (
                        <MyCard item={item} key={i} />
                    ))
                }
            </div >
        </div>
    );
};

export default MoviesList;