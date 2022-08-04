import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import BaseNews from "../apis/News";

const Articles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedArticles = await BaseNews.get("articles?_limit=30");

        setArticles(fetchedArticles.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NewsCard title={"Articles"} data={articles} />
    </div>
  );
};

export default Articles;
