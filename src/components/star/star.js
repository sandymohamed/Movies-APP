import './star.css'
const StarRating = ({ num }) => {

    const number = Math.floor(num)

    return (
        <div className="star-rating">
            {
                (number) &&
                [...Array(number)].map((star, index) => (

                    <span className="star" key={Math.random()}>&#9733;</span>
                )


                )}
        </div>
    );
};

export default StarRating