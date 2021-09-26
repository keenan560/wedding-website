import React from "react";
import home from "../assets/home.jpg";
import "./Home.css";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img src={home} class="img-thumbnail shadow home__img" alt="home"></img>
        <div className="home__title__container">
          <h1 className="home__title__main">Diana & Keenan's Wedding</h1>
          <div className="home__text__container">
            <h3>April 30th 2022</h3>
            <h3>Ceremony at 5:00pm EST</h3>
            <h3>Dreams Resort Hotel</h3>
            <h3>Punta Cana, Dominican Republic</h3>
            <Button type="button" className="home__button" href="/rsvp">
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
