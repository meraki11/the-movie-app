import React, { useState } from 'react';

//reference w3collective react-star-rating-component as alternate to Rating
const StarRating = () => {
    return (
        <div className="rating">
            {[...Array(5)].map((star) => {
                return (
                    <button
                        type="button"
                        key={index}
                        className={index <= rating ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}>
                        <span className="star">&#9733;</span>
                    </button>    
                );
            })}
        </div>
    );
}

export default StarRating;



