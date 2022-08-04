import React from "react";

const NewsDetail = ({ data }) => {
  //   const BASE_IMAGE_URL = "http://image.tmdb.org/t/p/original";
  return (
    <div>
      <div className="detail-news-poster">
        <div className="detail-news-poster-contain centered">
          {/* <h1>{data.title ? data.title : "Eror"}</h1> */}
          {/* <div className="truncate">
            <p>{data.summary}</p>
          </div> */}
          {/* <div className="button-group">
            <button className="play-button">
              <img src="/play-button.png" className="play-icon" alt="" />
              <span
                className="play-button-text"
                style={{ paddingLeft: "15px" }}
              >
                Play
              </span>
            </button>
            <button className="info-button">
              <img
                src="/more-information.png"
                alt=""
                className="info-icon"
                style={{ width: "15px" }}
              />
              <span
                className="info-button-text"
                style={{ paddingLeft: "15px" }}
              >
                More Information
              </span>
            </button>
          </div> */}
        </div>

        <img
          className="detail-news-poster-image"
          src={data.imageUrl}
          alt={data.title}
        />
      </div>
      <div className="detail-news-description">
        <h3>Summary</h3>
        <p>{data.summary}</p>
      </div>
    </div>
  );
};

export default NewsDetail;
