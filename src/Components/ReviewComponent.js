import React from 'react';
import Rating from './Rating'

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
                <label className="commentBox">Review:
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
            {/* <hr />
            <h2> Review:</h2>
            <p>Your Name: {props.data.name}</p>
            <p>Your Review: {props.data.review}</p>
            <p>Your Rating: {props.data.rating}</p> */}
        </div>
    ) 
}

export default ReviewComponent;