import React, { useEffect, useState } from "react";
// import { landscape, portrait } from "../components/DummyData";
import NewsDetail from "../components/NewsDetail";
// import tmdb from "../apis/Tmdb";
import BaseNews from "../apis/News";
import { useParams } from "react-router-dom";

export const DetailNews = () => {
  let params = useParams();

  // const [newss, setNewss] = useState([]);
  const [news, setNews] = useState([]);

  const id = params?.id;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedNews = await BaseNews.get(`articles/${id}`);
        setNews(fetchedNews.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchNews();
  }, [news.publishedAt, id]);

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const fetchedMovies = await tmdb.get("trending/movie/week");
  //       setMovies(fetchedMovies.data.results);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchMovies();
  // }, []);

  return (
    <>
      <NewsDetail data={news} />
      {/* <MovieSlider title={"Popular Movies"} data={movies} />
      <MovieSlider title={"Portrait Movies"} data={movies} original={true} /> */}
    </>
  );
};
