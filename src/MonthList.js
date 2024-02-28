import React from "react";
import "./css/monthList.css";

export default function MonthList({ months }) {
  return (
      <div
        className="container-fluid bg-dark text-warning"
        style={{ height: "100vh" }}
      >

        <div className="row">
          <div className="col-md-3">{months[0].MonthMm}</div>
          <div className="col-md-3">{months[1].MonthMm}</div>
          <div className="col-md-3">{months[2].MonthMm}</div>
          <div className="col-md-3">{months[3].MonthMm}</div>
        </div>
        <div className="row">
          <div className="col-md-3">{months[4].MonthMm}</div>
          <div className="col-md-6 text-center">မြန်မာလများ</div>
          <div className="col-md-3">{months[5].MonthMm}</div>
        </div>
        <div className="row">
          <div className="col-md-3">{months[6].MonthMm}</div>
          <div className="col-md-3">{months[7].MonthMm}</div>
          <div className="col-md-3">{months[8].MonthMm}</div>
          <div className="col-md-3">{months[9].MonthMm}</div>
        </div>
      </div>
  );
}
