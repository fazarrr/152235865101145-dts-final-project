import React, { Component } from "react";
import Slider from "react-slick";

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        right: "0px",
        display: "flex",
        minHeight: "90%",
        minWidth: "18%",
        alignItems: "center",
        justifyContent: "flex-end",
      }}
      onClick={onClick}
    />
  );
};
const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        left: "0px",
        position: "absolute",
        zIndex: 100,
        display: "flex",
        minHeight: "90%",
        minWidth: "18%",
        alignItems: "center",
        justifyContent: "flex-start",
      }}
      onClick={onClick}
    />
  );
};

class CustomSlide extends Component {
  render() {
    const { index, ...props } = this.props;
    const news = props.data;

    return (
      <div
        key={index}
        style={{ display: "flex", background: "#040B16", color: "white" }}
      >
        <div
          className="news-information-carousel"
          style={{
            width: "50%",
            padding: "60px 25px 12px 40px",
          }}
        >
          <div
            style={{ fontWeight: 600, fontSize: "32px", marginBottom: "15px" }}
          >
            {news.title}
          </div>
          <div
            style={{ fontWeight: 300, fontSize: "12px", marginBottom: "15px" }}
          >
            {news.newsSite}
          </div>
          <div
            style={{ fontWeight: 400, fontSize: "15px", marginBottom: "5px" }}
          >
            {news.summary}
          </div>
        </div>
        <div className="news-image-carousel">
          <img src={news.imageUrl} alt="news-poster" className="masked" />
        </div>
      </div>
    );
  }
}

export const NewsCarousel = ({ data }) => {
  //   const [category, setCategory] = useState([]);
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 1,
    speed: 500,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          centerMode: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  //   useEffect(() => {
  //     const fetchCategory = async () => {
  //       try {
  //         const fetchedCategory = await Header.get("/top-headlines");
  //         setCategory(fetchedCategory.data.category);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };

  //     fetchCategory();
  //   }, []);

  const news = data;

  return (
    <div style={{ marginBottom: "1%" }}>
      <Slider {...settings}>
        {news.map((e, i) => {
          return <CustomSlide key={i} index={i} data={e} />;
        })}
      </Slider>
    </div>
  );
};
