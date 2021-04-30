import React from 'react';
// import MovieList from './Components/MovieList';
import Movie from './Components/Movie';
import movieData from './Components/movieData';
import './App.css';

//each component to render on screen should be in here, like a table of contents
function App() {
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

  
  
  
  
  // return (
  //   <div className="MovieApp">
  //     <h1>Movie Review App Title</h1>
  //     <Movie />
  //     <Movie />
  //     <Movie />

      
  //   </div>
  // );


export default App;
/* <MovieList /> */