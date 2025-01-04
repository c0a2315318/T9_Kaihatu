import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const images = {
  "グルメ": [
    { src: "/images/g1.jpg", title: "ぶーる・ぶーる・ぶらんじぇり", subtitle: "パン、ベーグル", set: "g1" },
    { src: "/images/g2.jpg", title: "みんみんラーメン", subtitle: "ラーメン", set: "g2" }
  ],
  "歴史、文化": [
    { src: "/images/history1.jpg", title: "歴史1", subtitle: "サブタイトル1", set: "history1" },
    { src: "/images/history2.jpg", title: "歴史2", subtitle: "サブタイトル2", set: "history2" },
    // 他の画像も同様に追加
  ],
  "自然": [
    { src: "/images/nature1.jpg", title: "自然1", subtitle: "サブタイトル1", set: "nature1" },
    { src: "/images/nature2.jpg", title: "自然2", subtitle: "サブタイトル2", set: "nature2" },
    // 他の画像も同様に追加
  ],
  // 他のジャンルも同様に追加
};

const ResultPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { selectedPreferences } = location.state || { selectedPreferences: [] };

  const handleClick = (image) => {
    navigate("/details", { state: { image } });
  };

  return (
    <div className="App-content">
      {selectedPreferences.length > 0 ? (
        selectedPreferences.flatMap((genre) =>
          images[genre].map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={image.src}
                alt={genre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                onClick={() => handleClick(image)}
              />
              <div className="result-title">
                <h2>{image.title}</h2>
                <p>{image.subtitle}</p>
              </div>
            </div>
          ))
        )
      ) : (
        <p>選択がありません。</p>
      )}
    </div>
  );
};

export default ResultPage;