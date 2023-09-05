import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MyCard from '../../card/card';
import AdvancedExample from '../../pagination/Pagination';
import Loader from '../../loader/loader';

const AllMovies = () => {


    const [data, setDate] = useState(null);
    const [isLoading, setisLoading] = useState(true)

    const [page, setPage] = useState(1)

    const sendDataToParent = (index) => {
        setPage(index);
    };

    useEffect(() => {
        // get all movies

        axios.get(`${process.env.REACT_APP_API_URL}popular?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`)
            .then(res => {
                setDate(res.data.results)
                setisLoading(false)
            }
            )
            .catch(err => console.log(err))

    }, [page])

    return (
        <div style={{minHeight: '100vh'}}>

            <AdvancedExample sendDataToParent={sendDataToParent} />

            <div className='cards-container'>

                {isLoading ?
                    <Loader />
                    :
                    data?.map((item, i) => (
                        <MyCard item={item} key={i} />
                    ))
                }
            </div >
            <div className='d-flex justify-content-end'>

                <AdvancedExample sendDataToParent={sendDataToParent} />
            </div>

        </div>
    );
};

export default AllMovies;