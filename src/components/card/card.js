import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { ThemeContext } from '../context';
import StarRating from '../star/star';
import UpdateFavList from '../updateFavList/UpdateFavList';
import './card.css';
// -----------------------------------------------------------

const MyCard = ({ item, heart, moreStyle = null, h = null }) => {

  const param = useParams()
  const { themeContext } = useContext(ThemeContext);

  const titleSpread = item?.original_title?.split(' ')

  return (

    <Card className={`m-1 mb-4 ${themeContext} col-5 col-md-2 ${moreStyle} text-capitalize`}>


      <UpdateFavList id={item.id} heartClass={heart} />
      {(!param.id) ?
        <Link to={`/movie/${item.id}`}>
          <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} style={{ height: h ? h : '65% !important' }} />
        </Link>
        :
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/original${item.poster_path}`} style={{ height: h ? h : '65% !important' }} />
      }
      <Card.Body className={`  ${themeContext === 'darkMode' ? 'dark-card' : 'normal-card'}`}>

        {(item.original_title) && <Card.Title className={titleSpread?.length >= 4 ? 'fs-6' : 'fs-4'} >{`${item.original_title}`}</Card.Title>}

        {(item.original_name) && <Card.Title>{`${item.original_name}`}</Card.Title>}
        <StarRating num={item.vote_average} />

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

    </Card>



  );
};

export default MyCard;