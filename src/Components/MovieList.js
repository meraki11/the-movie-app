import React from 'react';
import Movie from './Movie';
import movieData from './movieData';

function MovieList() {
    const movieComponents = movieData.map(movie => 
      <Movie key={movie.id} title={movie.title} 
      imgUrl={movie.imgUrl} synopsis={movie.synopsis} 
      rating={movie.rating} />
    ) 
    
    return (
      <div>
        {movieComponents}
      </div>
    )
    
  }


export default MovieList;

//need to have select button for each movie to move to main display
// handleClick() {
//   this.setState({selectedMovie}) 
//   }
// }

// selectedMovie() {
  
  
// }

// <button onClick={this.handleClick}>Select</button>