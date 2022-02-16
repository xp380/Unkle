import React, { useEffect } from "react";
import Header from "../Header/index";
import { Layout, Row } from "antd";
import MovieCard from "../../Container/MovieCard";
import "./MainPage.css";

const { Content, Footer } = Layout;
const MainPage = (props) => {
  const { all_movies, apiMovies, favorite_movies } = props;

  console.log("demo", all_movies);
  console.log("pkp", favorite_movies);
  useEffect(() => {
    apiMovies();
  }, []);

  return (
    <div>
      <Header />
      <Content className="content">
        <Row gutter={15}>
          {all_movies.map((data) => (
            <MovieCard movieData={data} />
          ))}
        </Row>
      </Content>
      <Footer className="foot"></Footer>
    </div>
  );
};

export default MainPage;
