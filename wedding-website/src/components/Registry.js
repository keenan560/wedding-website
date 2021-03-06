import React from "react";
import "./Registry.css";
import registry from "../assets/registry.jpg";
import Button from "@material-ui/core/Button";

function Registry() {
  return (
    <div className="registry__container animate__animated animate__fadeIn animate__slower">
      <img className="registry__banner img-fluid" alt="banner" src={registry} />
      <div className="registry__text__background">
        <h1 className="registry__text">
          Although the thought of giving a gift counts, we'd really appreciate
          any donations to assist us for our honeymoon. Should you find it in
          your heart to give you can do so via the link below.
        </h1>
      </div>

      <Button
        className="registry__donate"
        variant="outlined"
        color="default"
        href="/donate"
      >
        Donate
      </Button>
    </div>
  );
}

export default Registry;
