import React from 'react';
import Rating from './Rating'

//text and rating review to be added to movie review array, need to add way to associate each review with the movie it references
function ReviewComponent(props) {
    return (
        <div className="flex-container">
            <form onSubmit={props.data.handleSubmit}>
                <label>Name:
                    <input 
                        type="text"
                        // value={props.data.name} 
                        // onChange={props.data.handleChange} 
                        name="name" 
                        placeholder="Please enter name"
                    />
                </label>    
                <br />
                <label>Review:
                    <textarea 
                        type="textarea"
                        // value={props.data.review} 
                        // onChange={props.data.handleChange} 
                        name="review" 
                        placeholder="Please enter your thoughts here"
                    />
                </label>    
                <br />
                <div className="rating"> 
                    <Rating />
                </div> 
                <br />
                <button>Submit</button>
            </form>
            
        </div>
    ) 
}

export default ReviewComponent;