// App.js

import "./App.css";
import MovieList from "./components/MovieList";
import Spinner from "./components/Spinner";
import { useState } from "react";
import ImprovedMovieList from "./components/ImprovedMovieList";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  // const [isLoading, setIsLoading] = useState(true);
/* 
  if (isLoading) {
    return <Spinner />;
  } else {
    return (
      <div className="App">
        {/* <MovieList />}
        <ImprovedMovieList />
      </div>
    );
  }
 */

  // Short if statement 
  // condition ? true : false 
  return (
  <div className="App">
    { isLoading ? <Spinner/> : <ImprovedMovieList/> } 
  </div>
  )
}

export default App;
