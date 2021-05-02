import React from 'react';
import MovieList from './Components/MovieList';

import './App.css';

//each component to render on screen should be in here, like a table of contents
function App() {

  return (
    <div className="MovieApp">
      <h1>Wizarding Movie Reviews</h1>
      <div className="container">
        <div><MovieList />
        </div>
      </div>
    </div>
  )
  
}


export default App;
