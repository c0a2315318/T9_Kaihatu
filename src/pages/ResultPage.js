import React from "react";
import { useLocation } from "react-router-dom";

// 各選択項目に対応する複数の画像のURLを用意します
const images = {
  "グルメ": ["/images/g1.jpg", "/images/g2.jpg", "/images/g3.jpg", "/images/g4.jpg", "/images/g5.jpg"],
  "歴史、文化": ["/images/history1.jpg", "/images/history2.jpg", "/images/history3.jpg", "/images/history4.jpg", "/images/history5.jpg", "/images/history6.jpg", "/images/history7.jpg", "/images/history8.jpg", "/images/history9.jpg", "/images/history10.jpg"],
  "自然": ["/images/nature1.jpg", "/images/nature2.jpg", "/images/nature3.jpg"],
  "ショッピング": ["/images/shopping1.jpg", "/images/shopping2.jpg"],
  "スポーツ": ["/images/sports1.jpg", "/images/sports2.jpg"],
  "居酒屋": ["/images/izakaya1.jpg", "/images/izakaya2.jpg"],
  "温泉": ["/images/onsen1.jpg", "/images/onsen2.jpg"],
};

const ResultPage = () => {
  const location = useLocation();
  const { selectedPreferences } = location.state || { selectedPreferences: [] };

  return (
    <div className="App-content">
      {selectedPreferences.length > 0 ? (
        selectedPreferences.flatMap((genre) =>
          images[genre].map((image, index) => (
            <div key={index} style={{ position: "relative" }}>
              <img
                src={image}
                alt={genre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="title">
                <h2>{genre}</h2>
                <p>サブタイトル</p>
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