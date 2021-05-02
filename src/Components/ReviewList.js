import React from 'react';
import ReviewForm from './ReviewForm';
import reviewData from './ReviewData';
import ReviewComponent from './ReviewComponent';
import Rating from './Rating'

//list of reviews per movie to display after review form
function ReviewList() {
    const [ reviews, setReviews ] = useState([]);

    useEffect(() => {
        //get reviews from form
        fetch(reviewData)
            .then((data) => {
                console.log(data);
                setReviews(data.results);
            });
    }, []);
        
    return <div>
        {reviews.length > 0 && reviews.map((review) => 
            <Review key={review.id} data={review}/>
        )}
    </div>
    }





    // const reviews = reviewData.reviews
    // const reviewComponents = reviews.map(review =>
    //     <ReviewComponent key={review.id} name={review.name} rating={review.rating} review={review.review} title={movie.title}/>
    // )
    //     //need to filter by movie
    // return (
    //     <div>
    //         {reviewComponents}
    //         <h2> Review:</h2>
    //         <p>Name: {props.data.name}</p>
    //         <p>Review: {props.data.review}</p>
    //         <p>Rating: {props.data.rating}</p>
    //     </div>
    // )
}

export default ReviewList;

