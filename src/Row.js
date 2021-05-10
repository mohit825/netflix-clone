import React, { useEffect, useState } from "react";
import axios from "./axios.js";
// import "./Row.css";
import "./Row.css";
import { IMG_BASE_URL } from "./Requests";

const Row = ({ title, fetchURL, isLarge }) => {
  const [movies, setMovies] = useState([]);

  //Code block to Call APIs
  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const request = await axios.get(fetchURL);
      setMovies(request.data.results);
    };
    fetchDataFromAPI();
  }, [fetchURL]);

  // To render Rows
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => {
          return (
            <img
              className={`row-poster ${
                isLarge ? "longer-poster" : "wider-poster"
              }`}
              key={movie.id}
              src={`${IMG_BASE_URL}${
                isLarge ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Row;
