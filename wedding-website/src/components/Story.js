import React from "react";
import "./Story.css";
import when from "../assets/2016.jpeg";
import tsc from "../assets/tsc.jpeg";
// import how from "../assets/how.jpg";
import outcome from "../assets/outcome.jpg";
import centralpark from "../assets/centralpark.jpeg";

function Story() {
  return (
    <div className="story__container">
      <h1 className="story__title">Our Story</h1>
      <div className="story__when">
        <p className="story__when__text">
          In April of 2016 is the year our journey began.
        </p>
        <img
          className="story__when__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          src={when}
          alt="when"
        />
      </div>
      <div className="story__where">
        <img
          className="story__where__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          src={tsc}
          alt="where"
        />
        <p className="story__where__text">
          We first crossed paths after attending a church service at Times
          Square Church located on Broadway & W 51st Street in Manhattan. To be
          more specific it was at McDonald's.
        </p>
      </div>
      <div className="story__how">
        <p className="story__how__text">
          After a church service a group of mutual friends went out to eat a
          restaurant in mid-town.
        </p>
        <img
          src={centralpark}
          className="story__how__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          alt="park"
        />
      </div>
      <div className="story__outcome">
        <img
          src={outcome}
          className="story__outcome__img img-thumbnail shadow animate__animated animate__fadeIn animate__slower"
          alt="outcome"
        />
        <p className="story__outcome__text">
          5 years later we have overcame trials and challenges and have proven
          that clinging to one another works.
        </p>
      </div>
    </div>
  );
}

export default Story;
