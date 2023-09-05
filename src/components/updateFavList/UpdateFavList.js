import React, { useEffect, useRef, } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNew, removeOne } from '../redux/actions/FavListAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './updateFavList.css'

import axios from 'axios';
import { addID, removeID } from '../redux/actions/idListAction';


const UpdateFavList = ({ id, heartClass }) => {

    const heart = useRef(null)


    const dispatch = useDispatch()
    const movies = useSelector(state => state.moviesIds)


    const getMovie = async (ID) => {
        // get movie by its id & add it to store
        const res = await axios.get(`${process.env.REACT_APP_API_URL}${ID}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`)

            .catch(err => console.log(err))
        dispatch(addID(res.data))

    }


    useEffect(() => {
        movies.forEach((item) => {
          if (item.id === id && !heart.current.classList.contains('gold')) {
            heart.current.classList.add('gold');
          }
        });
      }, [id, movies]);
      

    const handleFavList = (id) => {
        // get fav icon
        const myElem = document.getElementById(`${id}`)

        // check if icon has selected by its className
        if (!heart.current.classList.contains('gold')) {

            // if not selected dispatch to addNew() & add this movies to the list 
            dispatch(addNew(1))

            getMovie(id)

        } else {

            // if selected dispatch to removeOne() 
            dispatch(removeOne(1))
            //map on the array to get index of element to remove it from the array

            movies?.map(item => {
                if (item.id === id) {
                    const index = movies.indexOf(item);

                    if (index > -1) {
                        // only splice array when item is found
                        dispatch(removeID(index))

                    }
                }
                return movies
            }
            )


        }
        myElem.classList.toggle("gold");
    }

    return (
        <div>

            <FontAwesomeIcon icon="fa-solid fa-heart" id={id} key={id} ref={heart} className={`heart-pos fs-3  ${heartClass}`} onClick={() => handleFavList(id)} />

        </div>
    );
};

export default UpdateFavList;