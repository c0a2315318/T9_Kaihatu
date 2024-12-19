import React from "react";
import { useLocation } from "react-router-dom";

const ResultPage = () => {
  const location = useLocation();
  const { selectedPreferences } = location.state || { selectedPreferences: [] };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>選択されたジャンル</h2>
      {selectedPreferences.length > 0 ? (
        <ul>
          {selectedPreferences.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      ) : (
        <p>選択がありません。</p>
      )}
    </div>
  );
};

export default ResultPage;
