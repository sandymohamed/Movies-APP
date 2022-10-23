import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyCard from '../../card/card';
import AdvancedExample from '../../pagination/Pagination';

const AllMovies = () => {


    const [data, setDate] = useState([])
    const [page, setPage] = useState(1)

    const sendDataToParent = (index) => {
        setPage(index);
    };

    useEffect(() => {
        // get all movies

        axios.get(`${process.env.REACT_APP_API_URL}popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(res => setDate(res.data.results))
            .catch(err => console.log(err))

    }, [page])

    return (
        <div>

            <AdvancedExample sendDataToParent={sendDataToParent} />
            <h1 className='text-center'>movies</h1>

            <div className='cards-container'>

                {
                    data.map((item, i) => (
                        <MyCard item={item} key={i}  />
                    ))
                }
            </div >
            <AdvancedExample sendDataToParent={sendDataToParent} />

        </div>
    );
};

export default AllMovies;