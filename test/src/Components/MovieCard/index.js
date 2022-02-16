import React, { useState } from "react";
import { Card } from "antd";
import "./MovieCard.css";

const MovieCard = (lol) => {
  const movieData = lol;

  return (
    <>
      <Card
        className="custom-card"
        hoverable
        cover={
          <img
            alt="#"
            src={`https://image.tmdb.org/t/p/w500/${movieData.movieData.poster_path}`}
          />
        }
      />
    </>
  );
};

export default MovieCard;
