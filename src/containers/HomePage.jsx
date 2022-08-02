import React, { useEffect, useState } from "react";
import NewsCarousel from "../components/NewsCarousel";
import NewsSlider from "../components/NewsSlider";
import BaseNews from "../apis/News";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [infos, setInfos] = useState([]);
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedArticles = await BaseNews.get("articles");
        const fetchedBlogs = await BaseNews.get("blogs");
        const fetchedInfos = await BaseNews.get("info");
        const fetchedReports = await BaseNews.get("reports");

        setArticles(fetchedArticles.data);
        setBlogs(fetchedBlogs.data);
        setInfos(fetchedInfos.data);
        setReports(fetchedReports.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NewsCarousel data={articles} />
      <NewsSlider title={"Article"} data={articles} />
      <NewsSlider title={"Reports"} data={reports} />
      <NewsSlider title={"Blog"} data={blogs} />
    </div>
  );
};

export default Homepage;
