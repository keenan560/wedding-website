import React from "react";
import "./Info.css";

function Info() {
  return (
    <div className="info__container">
      <h1 className="info__title">Our Wedding</h1>
      <h1 className="info__subtitle">Diana & Keenan</h1>
      <div className="info__date__container">
        <h2 className="info__date">Saturday April 30th 2022 at 5:00 pm</h2>
        <h2 className="info__location">
          Dreams Spa & Resort Punta Cana, Dominican Republic
        </h2>
      </div>
    </div>
  );
}

export default Info;
