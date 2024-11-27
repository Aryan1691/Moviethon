import { useEffect, useState } from "react";
import "./app.css";
import search from "./Search.svg";
import MovieCard from "./MovieCard";
const App = () => {
  //api key= 7ece8b29
  // storing the api in useState
  const [movies, setMovies] = useState([]);
  const [searchM, setSearchM] = useState("");
  //creating an API
  //https://www.omdbapi.com/
  const API_URL = "https://www.omdbapi.com?apikey=7ece8b29";

  // const movie1 = {
  //   Title: "The Amazing Spiderman 2 Webb Cut",
  //   Year: "2021",
  //   imdbID: "tt18351128",
  //   Type: "movie",
  //   Poster:
  //     "https://m.media-amazon.com/images/M/MV5BNzI0MmQyMzYtZDAzNi00ZWZiLWFjMTgtNzQwOTRjYTFlM2Y3XkEyXkFqcGc@._V1_SX300.jpg",
  // };

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
    console.log(movies);
  };

  useEffect(() => {
    searchMovies(searchM);
  }, [searchM]);
  return (
    <div className="app">
      <h1>Movieland</h1>

      <div className="search">
        <input
          placeholder="Search for movies"
          value={searchM}
          onChange={(e) => {
            setSearchM(e.target.value);
          }}
        />

        <img
          src={search}
          alt="Search"
          onClick={() => {
            searchMovies(searchM);
          }}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {/* using prop and calling this components */}
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>NO MOVIES FOUND </h2>
        </div>
      )}
    </div>
  );
};

export default App;
