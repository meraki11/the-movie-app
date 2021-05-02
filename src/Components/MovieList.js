import React from 'react';
import Movie from './Movie';
import movieData from './movieData';

//displays Movie components and their data
//issue with images not showing and need to figure out how to display average of all star ratings
function MovieList() {
  const movieComponents = movieData.map(movie => 
    <Movie key={movie.id} title={movie.title} 
    imageUrl={movie.imageUrl} synopsis={movie.synopsis} 
    rating={movie.rating} />
  ) 
    
  return (
    <div>
      {movieComponents}
    </div>
  )
    
}

export default MovieList;
