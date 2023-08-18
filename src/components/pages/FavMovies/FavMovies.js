import MyCard from '../../card/card';
import { useSelector } from 'react-redux';
//  --------------------------------------

const FavMovies = () => {

    const movies = useSelector(state => state.moviesIds)

    return (

        <div className='cards-container ' style={{ minHeight: '100vh' }}>

            {(movies.length > 0) ?
                movies.map((item, i) => (
                    <MyCard item={item} key={i} heart='gold' moreStyle='col-8 col-md-3' />
                )) : <h1 className='title'>No favorite movies yet..</h1>
            }
        </div >

    );
};

export default FavMovies;