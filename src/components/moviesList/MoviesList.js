import React, { useEffect, useState } from 'react';
import axios from 'axios'
import MyCard from '../card/card';
import './moviesList.css'

const MoviesList = () => {

    const [data, setDate] = useState([])

    
    useEffect(() => {
        // get all movies
        axios.get(`${process.env.REACT_APP_API_URL}popular?api_key=${process.env.REACT_APP_API_KEY}&page=4`)
            .then(res => setDate(res.data.results))
            .catch(err => console.log(err))
    }, [])




    
    const handleSearch = (e) => {
        console.log("e= " + e.target.value)
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${e.target.value}`)
            .then(res => {
                setDate(res.data.results)
            })
            .catch(err => console.log(err))
    }
console.log(data)

    return (
        <div>
            <form className="pe-5" role="search">
                <input className="form-control m-4 d-block" name='search' type="search" placeholder="Search" aria-label="Search" onChange={(e) => { handleSearch(e) }} />
                <br />
                {(data.length === 0) && <h1 className='text-danger ms-5'>movie not found ☹</h1>}

            </form>

            <div className='cards-container'>

                {
                    data.map((item, i) => (
                        <MyCard item={item} key={i} />
                    ))
                }
            </div >
        </div>
    );
};

export default MoviesList;