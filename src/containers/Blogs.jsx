import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import BaseNews from "../apis/News";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedBlogs = await BaseNews.get("blogs");

        setBlogs(fetchedBlogs.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NewsCard title={"BLogs"} data={blogs} />
    </div>
  );
};

export default Blogs;
