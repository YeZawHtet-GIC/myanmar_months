import React from "react";
import "./css/monthList.css";
import { Carousel } from "react-bootstrap";
import { Link,useNavigate } from "react-router-dom";

export default function MonthList({ months }) {
  const navigate = useNavigate();
  // Chunk the months array into arrays of 4 months each
  const chunkedMonths = [];
  for (let i = 0; i < months.length; i += 4) {
    chunkedMonths.push(months.slice(i, i + 4));
  }
  let i = 0;
  return (
    <div
      className="container-fluid bg-dark text-warning"
      style={{ minHeight: "100vh", maxWidth:"100vw" }}
    >
      <div className="text-center py-5">
        <h2>မြန်မာလများ</h2>
      </div>
      <div className="row">
        <div className="col-md-12 bg-dark">
          <Carousel>
            {chunkedMonths.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  {chunk.map((month) => {
                    i++;
                    return (
                      <div
                        key={i}
                        className="col-md-3 p-4"
                        style={{ overflow: "hidden" }}
                      >
                        <Link
                          className="nav-link bg-change text-light mx-1 rounded img-fluid p-5 text-center"
                          to={`/months/${month.id}`}
                          style={{
                            backgroundImage: `url('./img/${i}.jpg')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            objectFit: "cover",
                            overflow:"hidden"
                          }}
                        >
                          <h3>{month.MonthMm}</h3>
                          <p>{month.MonthEn}</p>
                          <p>{month.FestivalMm}</p>
                        </Link>
                      </div>
                    );
                  })}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="text-center py-3">
        <button
          className="btn btn-outline-warning py-2 px-5"
          onClick={() => navigate("/")}
        >
          Back To Home
        </button>
      </div>
    </div>
  );
}
