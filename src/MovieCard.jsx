/* eslint-disable react/prop-types */
import img from  "../src/400.png"
//using props over here
const MovieCard = ({ movie }) => {
  return (
    <div>
      <div className="movie">
        <div>
          <p>{movie.Year}</p>
        </div>

        <div>
          <img
            src={
              movie.Poster !== "N/A"
                ? movie.Poster
                : img
            }
            alt={movie.Title}
          />
        </div>

        <div>
          <span>{movie.Type}</span>
          <h3>{movie.Title}</h3>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
