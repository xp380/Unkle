import React from "react";
import { Card, Tooltip } from "antd";
import "./MovieCard.css";

const MovieCard = (lol) => {
  const movieData = lol;
  return (
    <>
      <Tooltip
        title={movieData.movieData.overview}
        placement="leftTop"
        arrowPointAtCenter
        color="black"
        overlayInnerStyle={{ width: "650px", height: "100px" }}
      >
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
      </Tooltip>
    </>
  );
};

export default MovieCard;
