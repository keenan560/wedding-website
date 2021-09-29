import React from "react";
import "./Photos.css";
import photos from "../assets/photos_page/gallery";

function Photos() {
  return (
    <div>
      <h1 className="photo__title ">Gallery</h1>
      <div className="photos__container mx-4 shadow">
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            {/* <div class="carousel-item active">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="..." class="d-block w-100" alt="..." />
          </div> */}
            {photos.map((photo, idx) =>
              idx === 0 ? (
                <div className="carousel-item active animate__animated animate__fadeIn animate">
                  <img
                    key={idx}
                    src={photo.url}
                    className="img-thumbnail-gal img-thumbnail animate__animated animate__fadeIn animate d-block w-100"
                    alt={idx}
                  />
                </div>
              ) : (
                <div className="carousel-item animate__animated animate__fadeIn animate ">
                  <img
                    key={idx}
                    src={photo.url}
                    className="img-thumbnail-gal img-thumbnail animate__animated animate__fadeIn animate d-block w-100"
                    alt={idx}
                  />
                </div>
              )
            )}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
        <h1 className="quote">All the good memories...</h1>
      </div>
    </div>
  );
}

export default Photos;
