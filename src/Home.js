import React from "react";
import "./css/home.css";
import { useNavigate } from "react-router-dom";
// Define an array of month images
const monthImages = [
  require("./img/5.jpg"),
  require("./img/2.jpg"),
  require("./img/3.jpg"),
  require("./img/4.jpg"),
  require("./img/5.jpg"),
  require("./img/12.png"),
  require("./img/7.jpg"),
  require("./img/8.jpg"),
  require("./img/1.jpg"),
  require("./img/10.jpg"),
];

export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid bg-color1">
      <div className="container py-5">
        <div className="row row-cols-2">
          {/* Render month images with mapped array */}
          {monthImages.slice(0, 4).map((image, index) => (
            <div key={index} className="col-md-3 col animated-heartbeat">
              <img
                src={image}
                alt=""
                className="img-fluid mb-3 w-100 animated-image img-fix"
              />
            </div>
          ))}
        </div>
        <div className="row row-cols-1 align-items-center">
          <div className="col-md-3 col">
            <img
              src={monthImages[5]}
              alt=""
              className="img-fluid mb-3 w-100 animated-image img-fix"
            />
          </div>
          <div className="col-md-6 col text-center">
            <h1>မြန်မာလများ</h1>
            <button
              className="my-4 py-2 px-4 fw-bold btn btn-outline-warning color-1"
              onClick={() => navigate("/months")}
            >
              Learn More About မြန်မာလ{" "}
            </button>
          </div>
          <div className="col-md-3">
            <img
              src={monthImages[9]}
              alt=""
              className="img-fluid mb-3 w-100 animated-image img-fix"
            />
          </div>
        </div>
        <div className="row row-cols-2">
          {/* Render remaining month images with mapped array */}
          {monthImages.slice(6, 10).map((image, index) => (
            <div key={index} className="col-md-3 col animated-heartbeat">
              <img
                src={image}
                alt=""
                className="img-fluid mb-3 w-100 animated-image img-fix"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
