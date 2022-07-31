import React, { useEffect, useState } from "react";
// import { landscape, portrait } from "../components/DummyData";
import { NewsCarousel } from "../components/NewsCarousel";
import NewsSlider from "../components/NewsSlider";
import { Indonesia, Austria, Jepang, Australia, Kanada } from "../apis/News";

export const Homepage = () => {
  const [topHeadlinesIndonesia, setTopHeadlinesIndonesia] = useState([]);
  const [topHeadlinesAustria, setTopHeadlinesAustria] = useState([]);
  const [topHeadlinesJepang, setTopHeadlinesJepang] = useState([]);
  const [topHeadlinesAustralia, setTopHeadlinesAustralia] = useState([]);
  const [topHeadlinesKanada, setTopHeadlinesKanada] = useState([]);

  useEffect(() => {
    const fetchIndonesia = async () => {
      try {
        const fetchedTopHeadlinesIndonesia = await Indonesia.get(
          "https://api.spaceflightnewsapi.net/v3/articles"
        );
        const fetchedTopHeadlinesAustria = await Austria.get(
          "https://newsapi.org/v2/top-headlines"
        );
        const fetchedTopHeadlinesJepang = await Jepang.get(
          "https://newsapi.org/v2/top-headlines"
        );
        const fetchedTopHeadlinesAustralia = await Australia.get(
          "https://newsapi.org/v2/top-headlines"
        );
        const fetchedTopHeadlinesKanada = await Kanada.get(
          "https://newsapi.org/v2/top-headlines"
        );

        setTopHeadlinesIndonesia(fetchedTopHeadlinesIndonesia.data);
        setTopHeadlinesAustria(fetchedTopHeadlinesAustria.data.articles);
        setTopHeadlinesJepang(fetchedTopHeadlinesJepang.data.articles);
        setTopHeadlinesAustralia(fetchedTopHeadlinesAustralia.data.articles);
        setTopHeadlinesKanada(fetchedTopHeadlinesKanada.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchIndonesia();
  }, []);

  return (
    <div>
      <NewsCarousel data={topHeadlinesIndonesia} />
      <div className="centered">
        {/* <marquee className="keterangan">
          BERITA TERBARU DARI NEGARA MAJU DI DUNIA BERDASARKAN BENUA MENURUT
          INTERNATIONAL MONETARY FUND - IMF
        </marquee> */}
      </div>
      <NewsSlider
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
      />
    </div>
  );
};
