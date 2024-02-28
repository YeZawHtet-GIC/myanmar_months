import React from "react";
import "./css/monthList.css";
import { Carousel } from "react-bootstrap";

export default function MonthList({ months }) {
  // Chunk the months array into arrays of 4 months each
  const chunkedMonths = [];
  for (let i = 0; i < months.length; i += 4) {
    chunkedMonths.push(months.slice(i, i + 4));
  }

  return (
    <div className="container-fluid">
      <div className="col-md-12 text-center">
        <h2>မြန်မာလများ</h2>
      </div>
      <div className="row">
        <div className="col-md-12">
          <Carousel>
            {chunkedMonths.map((chunk, index) => (
              <Carousel.Item key={index}>
                <div className="row">
                  {chunk.map((month, idx) => (
                    <div key={idx} className="col-md-3 ">
                      <h3>{month.MonthMm}</h3>
                        <p>{month.MonthEn}</p>
                        <p>{month.FestivalMm}</p>
                      <Carousel.Caption>
                        <h3>{month.MonthMm}</h3>
                        <p>{month.MonthEn}</p>
                        <p>{month.FestivalMm}</p>
                      </Carousel.Caption>
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
