import React from 'react'
import ReviewForm from './ReviewForm'
import ReviewComponent from './ReviewComponent'
const reviews = ReviewForm.reviewData

class ReviewData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            reviews: [], 
        };
    }

    onAddItem = () => {
        this.setState(state => {
            const reviews = state.reviews.concat(state.value);
            return {
                reviews,
                value: "",
            };
        });
    };

    // ratingAve(ratings) {
    //     return ratings.reduce((a, b) => (a + b)) / ratings.length;
    // }

    render() {
        return(
            <div>
                <ul>
                    {this.state.reviews.map(item => (
                        <li key={item}>{item}</li> 
                    ))}
                </ul>
            </div>
        );
    }    
}

export default ReviewData
