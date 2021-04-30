import React from 'react';
// import MovieList from './Components/MovieList';

function Movie(props) {
    console.log(props)
    return (
        <div>
            <h3>Movie Title:{props.title}</h3>
            <img src={props.imgUrl}/>
            <p>Synopsis: {props.synopsis}</p>
            <span>{props.rating}</span>
        </div>
    )
}

export default Movie;