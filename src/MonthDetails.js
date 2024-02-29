import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import ReactLoading from "react-loading";
//custom css
import "./css/monthDetails.css";

export default function MonthDetails() {
  const { id } = useParams();
  const {
    data: month,
    error,
    isPending,
  } = useFetch("https://myanmar-months-data-json.vercel.app/Tbl_Months/" + id);
  const navigate = useNavigate();

  return (
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-12 bg-black text-warning-emphasis p-4 rounded shadow">
          {isPending && (
            <div
              className="text-warning bg-dark text-center fs-1"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "100vh",
              }}
            >
              <ReactLoading type="cylon" color="blue" height={50} width={100} />
            </div>
          )}
          {error && <div>{error}</div>}
          {month && (
            <div>
              <h2 className="text-center text-warning py-2">
                {month.MonthMm} ({month.FestivalMm})
              </h2>
              <h4 className="text-center text-warning">
                {month.MonthEn} ({month.FestivalEn})
              </h4>
              <div className="text-center my-4">
                <button
                  onClick={() => navigate("/months")}
                  className="btn btn-outline-primary px-5 fw-bold"
                >
                  Back
                </button>
              </div>
              <hr className="bg-light" />
              <div className="row">
                <div className="col-md-6 text-center">
                  <img
                    src={
                      process.env.PUBLIC_URL +
                      "/monthImage/" +
                      month.id +
                      ".jpg"
                    }
                    alt={month.MonthEn}
                    className="img-fluid rounded"
                    style={{ objectFit: "contain", height: "100%" }}
                  />
                </div>

                <div className="col-md-6">
                  <p className="mt-3 first-letter">{month.Description}</p>
                </div>
              </div>
              <hr className="bg-light" />
              <div className="row">
                <div className="col-md-12">
                  <h2 className="text-center py-3 text-warning">
                    {month.MonthMm}လ အကြောင်း
                  </h2>
                  <p className="p-2 first-letter">{month.Detail}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
