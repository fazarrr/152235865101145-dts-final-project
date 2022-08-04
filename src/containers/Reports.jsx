import React, { useEffect, useState } from "react";
import NewsCard from "../components/NewsCard";
import BaseNews from "../apis/News";

const Reports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedReports = await BaseNews.get("reports?_limit=30");

        setReports(fetchedReports.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NewsCard title={"Reports"} data={reports} />
    </div>
  );
};

export default Reports;
