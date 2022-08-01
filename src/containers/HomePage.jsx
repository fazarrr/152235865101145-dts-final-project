import React, { useEffect, useState } from "react";
// import { landscape, portrait } from "../components/DummyData";
import { NewsCarousel } from "../components/NewsCarousel";
import NewsSlider from "../components/NewsSlider";
import { BaseNews, Austria, Jepang, Australia, Kanada } from "../apis/News";

export const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [infos, setInfos] = useState([]);
  const [reports, setReports] = useState([]);
  const [topHeadlinesIndonesia, setTopHeadlinesIndonesia] = useState([]);
  // const [topHeadlinesAustria, setTopHeadlinesAustria] = useState([]);
  // const [topHeadlinesJepang, setTopHeadlinesJepang] = useState([]);
  // const [topHeadlinesAustralia, setTopHeadlinesAustralia] = useState([]);
  // const [topHeadlinesKanada, setTopHeadlinesKanada] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const fetchedArticles = await BaseNews.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        const fetchedBlogs = await BaseNews.get(
          "https://api.spaceflightnewsapi.net/v3/blogs"
        );
        const fetchedInfos = await BaseNews.get(
          "https://api.spaceflightnewsapi.net/v3/info"
        );
        const fetchedReports = await BaseNews.get(
          "https://api.spaceflightnewsapi.net/v3/reports"
        );
        const fetchedTopHeadlinesIndonesia = await BaseNews.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        // const fetchedTopHeadlinesAustria = await Austria.get(
        //   "https://newsapi.org/v2/top-headlines"
        // );
        // const fetchedTopHeadlinesJepang = await Jepang.get(
        //   "https://newsapi.org/v2/top-headlines"
        // );
        // const fetchedTopHeadlinesAustralia = await Australia.get(
        //   "https://newsapi.org/v2/top-headlines"
        // );
        // const fetchedTopHeadlinesKanada = await Kanada.get(
        //   "https://newsapi.org/v2/top-headlines"
        // );

        setArticles(fetchedArticles.data);
        setBlogs(fetchedBlogs.data);
        setInfos(fetchedInfos.data);
        setReports(fetchedReports.data);
        setTopHeadlinesIndonesia(fetchedTopHeadlinesIndonesia.data);
        console.log(fetchedTopHeadlinesIndonesia.data);

        // setTopHeadlinesAustria(fetchedTopHeadlinesAustria.data.articles);
        // setTopHeadlinesJepang(fetchedTopHeadlinesJepang.data.articles);
        // setTopHeadlinesAustralia(fetchedTopHeadlinesAustralia.data.articles);
        // setTopHeadlinesKanada(fetchedTopHeadlinesKanada.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchNews();
  }, []);

  return (
    <div>
      <NewsCarousel data={blogs} />
      {/* <div className="centered">
        <marquee className="keterangan">
          BERITA TERBARU DARI NEGARA MAJU DI DUNIA BERDASARKAN BENUA MENURUT
          INTERNATIONAL MONETARY FUND - IMF
        </marquee>
      </div> */}
      <NewsSlider title={"Article"} data={articles} />
      <NewsSlider title={"Blog"} data={blogs} />
      <NewsSlider title={"Reports"} data={reports} />
      {/* <NewsSlider
        title={"Benua Eropa - Austria News Update"}
        data={topHeadlinesAustria}
      />
      <NewsSlider
        title={"Benua Asia - Jepang News Update"}
        data={topHeadlinesJepang}
      />
      <NewsSlider
        title={"Benua Australia dan Oceania - Australia News Update"}
        data={topHeadlinesAustralia}
      />
      <NewsSlider
        title={"Benua Amerika - Kanada News Update"}
        data={topHeadlinesKanada}
      /> */}
    </div>
  );
};
