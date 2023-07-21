import React from "react";

export default function Carousel({ product }) {
  const ImagesUrl =
    "https://res.cloudinary.com/react-de-cero-a-experto/image/upload/v1689902968/buyorama/products/";
  const images = product.images.split(",");

  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner">
        {images.map((image, index) => (
          <div
            key={image}
            className={`carousel-item ${index === 0 ? "active" : ""}`}
          >
            <img
              src={`${ImagesUrl}${image}`}
              className="d-block w-100"
            />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
