import axios from "axios";

// const baseUrl = "https://newsapi.org/v2b/";
// const { REACT_APP_NEWS_API_KEY } = process.env;

const Indonesia = axios.create({
  // baseUrl: baseUrl,
  params: {
    // apiKey: REACT_APP_NEWS_API_KEY,
    country: "id",
    apiKey: "c05b1c45e5f54f80a5362b4e0d12f406",
  },
});

const Austria = axios.create({
  // baseUrl: baseUrl,
  params: {
    // apiKey: REACT_APP_NEWS_API_KEY,
    country: "at",
    apiKey: "c05b1c45e5f54f80a5362b4e0d12f406",
  },
});

const Jepang = axios.create({
  // baseUrl: baseUrl,
  params: {
    // apiKey: REACT_APP_NEWS_API_KEY,
    country: "jp",
    apiKey: "c05b1c45e5f54f80a5362b4e0d12f406",
  },
});

const Australia = axios.create({
  // baseUrl: baseUrl,
  params: {
    // apiKey: REACT_APP_NEWS_API_KEY,
    country: "au",
    apiKey: "c05b1c45e5f54f80a5362b4e0d12f406",
  },
});

const Kanada = axios.create({
  // baseUrl: baseUrl,
  params: {
    // apiKey: REACT_APP_NEWS_API_KEY,
    country: "ca",
    apiKey: "c05b1c45e5f54f80a5362b4e0d12f406",
  },
});

export { Indonesia, Austria, Jepang, Australia, Kanada };
