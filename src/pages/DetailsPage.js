import React from "react";
import { useLocation } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const { image } = location.state || { image: {} };

  const thumbnails = [
    "/images/g1-1.jpg",
    "/images/g1-2.jpg",
    "/images/g1-3.jpg",
    "/images/g1-4.jpg",
    "/images/g1-5.jpg",
    "/images/g1-6.jpg"
  ];

  return (
    <div className="details-page">
      <div className="details-title">
        <h2>{image.title}</h2>
        <p>{image.subtitle}</p>
      </div>
      <div className="main-image">
        <img src="/images/g1-x.png" alt={image.title} className="main-img" />
      </div>
      <div className="thumbnails">
        {thumbnails.map((thumb, index) => (
          <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} className="thumbnail-img" />
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;