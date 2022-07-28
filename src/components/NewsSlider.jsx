import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

export const NewsSlider = ({ data, title, original }) => {
  const settings = {
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const news = data;
  return (
    <div className="container news-slider">
      <p className="list-title">{title ? title : "Unamed List"}</p>
      <Slider {...settings}>
        {news.map((e, i) => {
          return (
            <div
              key={i}
              className={`${original ? "original" : "list"} centered`}
            >
              <Link to={"/"}>
                {e.urlToImage != null ? (
                  <img
                    className={`slider-image ${original ? "original" : "list"}`}
                    src={e.urlToImage}
                    alt={e.title}
                  />
                ) : (
                  <img
                    className={`slider-image ${original ? "original" : "list"}`}
                    src={require("../assets/no-image.jpg")}
                    alt={e.title}
                  />
                )}
                <div className="list-judul">{e.title}</div>
              </Link>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default NewsSlider;
