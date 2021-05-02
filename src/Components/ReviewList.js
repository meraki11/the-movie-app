import React from 'react';
import ReviewForm from './ReviewForm';
import ReviewData from './ReviewData';
import ReviewComponent from './ReviewComponent';
import Rating from './Rating'

function ReviewList() {
    const reviews = ReviewData.reviews
    const reviewComponents = reviews.map(review =>
        <ReviewComponent key={review.id} name={review.name} rating={review.rating} review={review.review} />
    )
        //need to filter by movie
    return (
        <div>
            {reviewComponents}
        </div>
    )
}

export default ReviewList;