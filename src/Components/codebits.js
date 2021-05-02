function selectMovie() {
    setMovie(movie == movie.id)
    return movie;
  }

  const [movie, setMovie]= useState(movie.id)

  <button onClick={selectMovie}></button>
  <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js'></script>


  <h1>Star rating </h1>
<div class="rating"> 
<input type="radio" name="rating" value="5" id="5"><label for="5">☆</label> 
<input type="radio" name="rating" value="4" id="4"><label for="4">☆</label> 
<input type="radio" name="rating" value="3" id="3"><label for="3">☆</label> 
<input type="radio" name="rating" value="2" id="2"><label for="2">☆</label> 
<input type="radio" name="rating" value="1" id="1"><label for="1">☆</label>
</div>


<label>
                        <input
                            type="radio" name="rating" value="5" id="5" 
                        />
                        <label for="5">☆</label>
                    </label> 
                    <label> 
                        <input
                            type="radio" name="rating" value="4" id="4"
                        />
                        <label for="4">☆</label>
                    </label>
                    <label>
                        <input 
                            type="radio" name="rating" value="3" id="3"
                        />
                        <label for="3">☆</label>
                    </label>
                    <label>  
                        <input 
                            type="radio" name="rating" value="2" id="2" 
                        />
                        <label for="2">☆</label>
                    </label>
                    <label>
                        <input 
                            type="radio" name="rating" value="1" id="1" checked={props.data.rating === "1"} onChange={props.data.handleChange}
                        />
                        <label for="1">☆</label>
                    </label>