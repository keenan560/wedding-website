import React from "react";
import "./Registry.css";
import registry from "../assets/registry.jpg";
import Button from "@material-ui/core/Button";

function Registry() {
  return (
    <div className="registry__container">
      <img className="registry__banner img-fluid" alt="photo" src={registry} />
      <div className="registry__text__background">
        <h1 className="registry__text">
          Although the thought of giving a gift counts, we'd really appreciate
          any donations to assist us for our honeymoon. Should you find it in
          your heart to give please see the link below to our GoFundMe page.
        </h1>
      </div>

      <Button className="registry__donate" variant="outlined" color="default">
        Donate
      </Button>
    </div>
  );
}

export default Registry;
