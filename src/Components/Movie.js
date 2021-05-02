import React from 'react';
import ReviewForm from './ReviewForm';
// import ReviewList from './ReviewList';

function Movie(props) {
    return (
        <div className="movie-card">
            <h3>Movie Title: {props.title}</h3>
            <img src={props.imgUrl}/>
            <p className="summary">Synopsis: {props.synopsis}</p>
            <span>{props.rating}</span>
            <div className="reviewForm">
                <ReviewForm />
            </div>
            <div>
                {/* <ReviewList /> */}
            </div>
        </div>
    ) 
}

export default Movie;