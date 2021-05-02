import React from 'react';
import MovieList from './MovieList';
import Movie from './Movie';
import movieData from './movieData';
// import ReviewForm from './ReviewForm';
// import ReviewList from './ReviewList';
// import ReviewData from './ReviewData';

//no longer used at this time, intended to display individual movies when clicked in overall movie list
class MovieOnDisplay extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            movie: movieData,
        };
        // this.handleClick = this.handleClick.bind(this)
    }

    // handleClick(event) {
    //     this.setState(state => 
    //         ({})
    // }
    // currentSelection () {
    //     if (currentSelection === movie.id) {
    //            then currentData = {
                

    // }


    render() {
        return (
            // const currentMovie = ({ title, imgUrl, synopsis, rating})

            
            <div>
                <h3>Current Selection</h3>
                <Movie
                    
                />   
                
            </div>
        )
    }
}


export default MovieOnDisplay;