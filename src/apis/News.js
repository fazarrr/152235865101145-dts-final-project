import axios from "axios";

const baseUrl = "https://api.spaceflightnewsapi.net/v3/";
// const { REACT_APP_NEWS_API_KEY } = process.env;

const BaseNews = axios.create({
  baseURL: baseUrl,
  // params: {
  //   // apiKey: REACT_APP_NEWS_API_KEY,
  //   country: "id",
  //   apiKey: "c05b1c45e5f54f80a5362b4e0d12f406",
  // },
});

export default BaseNews;
