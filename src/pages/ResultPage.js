import React from "react";
import { useLocation } from "react-router-dom";

// 各選択項目に対応する複数の画像のURLとタイトルを用意します
const images = {
  "グルメ": [
    { src: "/images/g1.jpg", title: "グルメ1", subtitle: "サブタイトル1" },
    { src: "/images/g2.jpg", title: "グルメ2", subtitle: "サブタイトル2" },
    { src: "/images/g3.jpg", title: "グルメ3", subtitle: "サブタイトル3" },
    { src: "/images/g4.jpg", title: "グルメ4", subtitle: "サブタイトル4" },
    { src: "/images/g5.jpg", title: "グルメ5", subtitle: "サブタイトル5" }
  ],
  "歴史、文化": [
    { src: "/images/history1.jpg", title: "歴史1", subtitle: "サブタイトル1" },
    { src: "/images/history2.jpg", title: "歴史2", subtitle: "サブタイトル2" },
    { src: "/images/history3.jpg", title: "歴史3", subtitle: "サブタイトル3" },
    { src: "/images/history4.jpg", title: "歴史4", subtitle: "サブタイトル4" },
    { src: "/images/history5.jpg", title: "歴史5", subtitle: "サブタイトル5" },
    { src: "/images/history6.jpg", title: "歴史6", subtitle: "サブタイトル6" },
    { src: "/images/history7.jpg", title: "歴史7", subtitle: "サブタイトル7" },
    { src: "/images/history8.jpg", title: "歴史8", subtitle: "サブタイトル8" },
    { src: "/images/history9.jpg", title: "歴史9", subtitle: "サブタイトル9" },
    { src: "/images/history10.jpg", title: "歴史10", subtitle: "サブタイトル10" }
  ],
  "自然": [
    { src: "/images/nature1.jpg", title: "自然1", subtitle: "サブタイトル1" },
    { src: "/images/nature2.jpg", title: "自然2", subtitle: "サブタイトル2" },
    { src: "/images/nature3.jpg", title: "自然3", subtitle: "サブタイトル3" }
  ],
  "ショッピング": [
    { src: "/images/shopping1.jpg", title: "ショッピング1", subtitle: "サブタイトル1" },
    { src: "/images/shopping2.jpg", title: "ショッピング2", subtitle: "サブタイトル2" }
  ],
  "スポーツ": [
    { src: "/images/sports1.jpg", title: "スポーツ1", subtitle: "サブタイトル1" },
    { src: "/images/sports2.jpg", title: "スポーツ2", subtitle: "サブタイトル2" }
  ],
  "居酒屋": [
    { src: "/images/izakaya1.jpg", title: "居酒屋1", subtitle: "サブタイトル1" },
    { src: "/images/izakaya2.jpg", title: "居酒屋2", subtitle: "サブタイトル2" }
  ],
  "温泉": [
    { src: "/images/onsen1.jpg", title: "温泉1", subtitle: "サブタイトル1" },
    { src: "/images/onsen2.jpg", title: "温泉2", subtitle: "サブタイトル2" }
  ]
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
                src={image.src}
                alt={genre}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="title">
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