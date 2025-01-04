import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const DetailsPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { image } = location.state || { image: {} };

  const thumbnailSets = {
    g1: [
      "/images/g1-1.jpg",
      "/images/g1-2.jpg",
      "/images/g1-3.jpg",
      "/images/g1-4.jpg",
      "/images/g1-5.jpg",
      "/images/g1-6.jpg"
    ],
    g2: [
      "/images/g2-1.jpg",
      "/images/g2-2.jpg",
      "/images/g2-3.jpg",
      "/images/g2-4.jpg",
      "/images/g2-5.jpg",
      "/images/g2-6.jpg"
    ],
    // 他のセットも同様に追加
  };

  const mainImages = {
    g1: "/images/g1-x.png",
    g2: "/images/g2-x.png",
    // 他のセットも同様に追加
  };

  const thumbnails = thumbnailSets[image.set] || [];
  const mainImage = mainImages[image.set] || "";

  const handleClick = (index) => {
    if (index < thumbnails.length) {
      navigate("/details", { state: { image: { src: thumbnails[index], title: image.title, subtitle: image.subtitle, set: image.set } } });
    }
  };

  return (
    <div className="details-page">
      <div className="details-title">
        <h2>{image.title}</h2>
        <p>{image.subtitle}</p>
      </div>
      <div className="main-image">
        <img src={mainImage} alt={image.title} className="main-img" />
      </div>
      <div className="thumbnails">
        {thumbnails.map((thumb, index) => (
          <img key={index} src={thumb} alt={`Thumbnail ${index + 1}`} className="thumbnail-img" onClick={() => handleClick(index)} />
        ))}
      </div>
    </div>
  );
};

export default DetailsPage;