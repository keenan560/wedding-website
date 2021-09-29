import React from "react";
import home from "../assets/home.jpg";
import "./Home.css";
import Button from "@material-ui/core/Button";

function Home() {
  return (
    <div className="home mx-3 shadow">
      <div className="home__container mx-auto p-3">
        <img
          src={home}
          class="img-thumbnail shadow home__img animate__animated animate__fadeIn animate__slower"
          alt="home"
        ></img>
        <div className="home__title__container mx-auto animate__animated animate__fadeInRight animate__slow">
          <h1 className="home__title__main">Diana & Keenan's Wedding</h1>
          <div className="home__text__container mx-auto">
            <h3 className="my-2">April 30th 2022</h3>
            <h3 className="my-2">Ceremony at 5:00pm EST</h3>
            <h3 className="my-2">Dreams Resort Hotel</h3>
            <h3 className="my-2">Punta Cana, Dominican Republic</h3>
            <Button
              id="textb4-button"
              type="button"
              className="home__button"
              href="/rsvp"
            >
              RSVP
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
