import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../context';
import StarRating from '../star/star';
import UpdateFavList from '../updateFavList/UpdateFavList';


const MyCard = ({ item ,heart}) => {

  const param = useParams()


  return (

    <Card className={`mb-4 ${ThemeContext}`}>


      <UpdateFavList id={item.id} heartClass={heart} />

      <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`}  />
      <Card.Body className="text-dark">

      {(item.original_title) &&  <Card.Title>{`${item.original_title}` }</Card.Title>}

      {(item.original_name) &&  <Card.Title>{`${item.original_name}` }</Card.Title>}

        <Card.Text>
          langauge: {item.original_language}
        </Card.Text>
        

        {
          (param.id) && (
            <>
              <Card.Text>
                tagline: {item.tagline}
              </Card.Text>
              <Card.Text>
                publish date: {item.release_date}
              </Card.Text>
              <Card.Text>
          overview : {item.overview}
        </Card.Text>
            </>

          )
        }


        <Card.Text>
          Vote count: {item.vote_count}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">
          <StarRating num={item.vote_average} />
          {/* <button className='btn btn-primary' onClick={()=>{}}>watch now</button> */}

          {(!param.id) &&
            <Link to={`/movie/${item.id}`} className='btn btn-warning'>
              <p key={item.id}>Watch now </p>
            </Link>}

        </small>
      </Card.Footer>
    </Card>



  );
};

export default MyCard;