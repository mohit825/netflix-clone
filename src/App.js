import React from "react";
import Row from "./Row";
import requests from "./Requests";
import Banner from "./Banner";
import "./App.css";
import NavBar from "./NavBar";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <Row
        title="NETFLIX Originals"
        fetchURL={requests.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
    </div>
  );
};

export default App;
