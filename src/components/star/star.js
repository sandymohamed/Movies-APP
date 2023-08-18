import './star.css'
const StarRating = ({ num }) => {

    const number = Math.floor(num)

    return (
        <div className="star-rating d-flex flex-nowrap">

            {
                (number < 5) ?
                    [...Array(number)].map((star, index) => (
                        <span className="star" key={Math.random()}>&#9733;</span>
                    ))
                    :
                    <span className="star"> {number}&#9733; </span>
            }
        </div>
    );
};

export default StarRating