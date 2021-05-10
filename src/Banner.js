import React, { useState, useEffect } from "react";
import axios from "./axios";
import requests from "./Requests";
import { IMG_BASE_URL } from "./Requests";
import "./Banner.css";

const Banner = () => {
  const [randomMovie, setRandomMovie] = useState([]);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setRandomMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    };
    fetchRandomMovie();
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  //   console.table(randomMovie);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${IMG_BASE_URL}${randomMovie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        {/* title */}
        <h1 className="banner-title">
          {randomMovie?.title ||
            randomMovie?.name ||
            randomMovie?.original_name}
        </h1>
        {/* div>2 buttons */}
        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        {/* description */}
        <h1 className="banner-description">
          {truncate(randomMovie?.overview, 150)}
        </h1>
      </div>
      <div className="banner-fadeBottom"></div>
    </header>
  );
};

export default Banner;
